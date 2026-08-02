import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Card } from '../../../core/models/card.model';
import { CollectionService } from '../../../core/services/collection.service';
import { CardStoreService } from '../../../core/state/card-store.service';
import { CardGridComponent } from '../../catalog/card-grid/card-grid';
import { SearchBarComponent } from '../../catalog/search-bar/search-bar';

@Component({
  selector: 'app-collection-page',
  imports: [RouterLink, SearchBarComponent, CardGridComponent],
  templateUrl: './collection-page.html',
  styleUrl: './collection-page.css'
})
export class CollectionPageComponent {
  private readonly store = inject(CardStoreService);
  private readonly collectionService = inject(CollectionService);

  readonly searchTerm = signal('');

  readonly favoriteCards = computed<Card[]>(() => {
    const favoriteIds = this.collectionService.favorites();
    const favoriteCards = this.store.cards().filter((card) => favoriteIds.includes(card.id));
    const term = this.searchTerm().trim().toLowerCase();

    if (!term) {
      return favoriteCards;
    }

    return favoriteCards.filter((card) =>
      card.name.toLowerCase().includes(term)
    );
  });

  readonly count = computed(() => this.favoriteCards().length);

  updateSearch(term: string): void {
    this.searchTerm.set(term);
  }
}
