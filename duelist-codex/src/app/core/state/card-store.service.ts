import { computed, inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { Card } from '../models/card.model';
import { CardApiService } from '../services/card-api.service';

@Injectable({
  providedIn: 'root'
})
export class CardStoreService {
  private readonly cardApi = inject(CardApiService);

  readonly searchTerm = signal('');
  readonly pageSize = signal(60);
  readonly currentPage = signal(1);

  // Uso de rxResource() para manejo reactivo de peticiones asíncronas
  readonly cardsResource = rxResource({
    stream: () => this.cardApi.getCards()
  });

  readonly cards = computed(() => this.cardsResource.value() ?? []);
  readonly loading = computed(() => this.cardsResource.isLoading());
  readonly error = computed(() =>
    this.cardsResource.error() ? 'No pudimos cargar las cartas. Inténtalo más tarde.' : null
  );

  readonly filteredCards = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();

    if (!term) {
      return this.cards();
    }

    return this.cards().filter((card) =>
      card.name.toLowerCase().includes(term)
    );
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredCards().length / this.pageSize()))
  );

  readonly visibleCards = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize();
    const end = start + this.pageSize();

    return this.filteredCards().slice(start, end);
  });

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
  readonly canGoPrevious = computed(() => this.currentPage() > 1);
  readonly canGoNext = computed(() => this.currentPage() < this.totalPages());

  getCardById(id: number): Card | undefined {
    return this.cards().find((card) => card.id === id);
  }

  updateSearchTerm(term: string): void {
    this.searchTerm.set(term);
    this.currentPage.set(1);
  }

  goToPreviousPage(): void {
    if (this.canGoPrevious()) {
      this.currentPage.update((page) => page - 1);
    }
  }

  goToNextPage(): void {
    if (this.canGoNext()) {
      this.currentPage.update((page) => page + 1);
    }
  }
}
