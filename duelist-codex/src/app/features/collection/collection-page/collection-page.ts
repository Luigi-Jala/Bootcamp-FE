import { Component, computed, inject } from '@angular/core';
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
  private readonly collectionService = inject(CollectionService);
  protected readonly store = inject(CardStoreService);

  readonly loading = computed(() => this.store.loading());

  readonly favoriteCards = computed<Card[]>(() => {
    const favoriteIds = new Set(this.collectionService.favorites());

    return this.store.cards().filter((card: Card) => favoriteIds.has(card.id));
  });

  readonly count = computed(() => this.favoriteCards().length);

  updateSearch(term: string): void {
    this.store.updateSearchTerm(term);
  }

  onTypeFilter(type: string): void {
    this.store.updateTypeFilter(type);
  }

  onAttributeFilter(attribute: string): void {
    this.store.updateAttributeFilter(attribute);
  }

  onRaceFilter(race: string): void {
    this.store.updateRaceFilter(race);
  }
}
