import { Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { forkJoin, map, of } from 'rxjs';

import { Card } from '../../../core/models/card.model';
import { CardApiService } from '../../../core/services/card-api.service';
import { CollectionService } from '../../../core/services/collection.service';
import { CardGridComponent } from '../../catalog/card-grid/card-grid';
import { SearchBarComponent } from '../../catalog/search-bar/search-bar';

@Component({
  selector: 'app-collection-page',
  imports: [RouterLink, SearchBarComponent, CardGridComponent],
  templateUrl: './collection-page.html',
  styleUrl: './collection-page.css'
})
export class CollectionPageComponent {
  private readonly cardApi = inject(CardApiService);
  private readonly collectionService = inject(CollectionService);

  readonly searchTerm = signal('');

  // Carga las cartas favoritas directamente por sus IDs desde la API
  readonly collectionResource = rxResource({
    params: () => this.collectionService.favorites(),
    stream: ({ params: favoriteIds }) => {
      if (!favoriteIds || favoriteIds.length === 0) {
        return of<Card[]>([]);
      }
      // Pedir cada carta individualmente (aprovecha el caché de 10s)
      const requests = favoriteIds.map((id: number) =>
        this.cardApi.getCardById(id).pipe(
          map((card) => card)
        )
      );
      return forkJoin(requests).pipe(
        map((results) => results.filter((card): card is Card => card !== null))
      );
    }
  });

  readonly allFavoriteCards = computed<Card[]>(() => this.collectionResource.value() ?? []);
  readonly loading = computed(() => this.collectionResource.isLoading());

  readonly favoriteCards = computed<Card[]>(() => {
    const cards = this.allFavoriteCards();
    const term = this.searchTerm().trim().toLowerCase();

    if (!term) {
      return cards;
    }

    return cards.filter((card) =>
      card.name.toLowerCase().includes(term)
    );
  });

  readonly count = computed(() => this.favoriteCards().length);

  updateSearch(term: string): void {
    this.searchTerm.set(term);
  }
}
