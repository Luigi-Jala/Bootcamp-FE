import { computed, inject, Injectable, signal } from '@angular/core';

import { Card } from '../models/card.model';
import { CardApiService } from '../services/card-api.service';

@Injectable({
  providedIn: 'root'
})
export class CardStoreService {
  private readonly cardApi = inject(CardApiService);
  private readonly visibleLimit = 60;
  private readonly hasLoaded = signal(false);

  readonly cards = signal<Card[]>([]);
  readonly searchTerm = signal('');
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly selectedCard = signal<Card | null>(null);

  readonly filteredCards = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();

    if (!term) {
      return this.cards();
    }

    return this.cards().filter((card) =>
      card.name.toLowerCase().includes(term)
    );
  });

  readonly visibleCards = computed(() =>
    this.filteredCards().slice(0, this.visibleLimit)
  );

  readonly hasNoResults = computed(
    () =>
      !this.loading() &&
      !this.error() &&
      this.searchTerm().trim().length > 0 &&
      this.filteredCards().length === 0
  );

  readonly hasNoCards = computed(
    () =>
      !this.loading() &&
      !this.error() &&
      this.searchTerm().trim().length === 0 &&
      this.cards().length === 0
  );

  readonly totalCount = computed(() => this.filteredCards().length);
  readonly visibleCount = computed(() => this.visibleCards().length);

  loadCards(): void {
    if (this.hasLoaded() || this.loading()) {
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    this.cardApi.getCards().subscribe({
      next: (cards) => {
        this.cards.set(cards);
        this.hasLoaded.set(true);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('We could not load the cards. Please try again later.');
        this.loading.set(false);
      }
    });
  }

  updateSearchTerm(term: string): void {
    this.searchTerm.set(term);
    this.selectedCard.set(null);
  }

  selectCard(card: Card): void {
    this.selectedCard.set(card);
  }

  clearSelectedCard(): void {
    this.selectedCard.set(null);
  }
}

