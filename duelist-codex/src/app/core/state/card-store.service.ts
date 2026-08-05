import { computed, inject, Injectable, linkedSignal, signal } from '@angular/core';
import { rxResource, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { Card, CardSearchParams } from '../models/card.model';
import { CardApiService } from '../services/card-api.service';

@Injectable({
  providedIn: 'root'
})
export class CardStoreService {
  private readonly cardApi = inject(CardApiService);

  readonly searchTerm = signal('');
  readonly selectedType = signal('any');
  readonly selectedAttribute = signal('any');
  readonly selectedRace = signal('any');

  readonly pageSize = signal(60);
  readonly currentPage = signal(1);

  readonly searchParams = computed<CardSearchParams>(() => ({
    fname: this.searchTerm(),
    type: this.selectedType(),
    attribute: this.selectedAttribute(),
    race: this.selectedRace()
  }));

  private readonly debouncedParamsSignal = toSignal(
    toObservable(this.searchParams).pipe(
      debounceTime(300),
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr))
    ),
    { initialValue: this.searchParams() }
  );

  readonly cardsResource = rxResource({
    params: () => this.debouncedParamsSignal(),
    stream: ({ params }) => this.cardApi.searchCards(params)
  });

  readonly cards = computed<Card[]>(() => this.cardsResource.value() ?? []);
  readonly loading = computed(() => this.cardsResource.isLoading());
  readonly error = computed(() =>
    this.cardsResource.error() ? 'No pudimos cargar las cartas. Inténtalo más tarde.' : null
  );

  // HU-05: linkedSignal derivado de this.cards que retiene el valor previo del usuario al cambiar los datos
  readonly focusedCard = linkedSignal<Card[], Card | null>({
    source: this.cards,
    computation: (_newCards, previous) => previous?.value ?? null
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.cards().length / this.pageSize()))
  );

  readonly visibleCards = computed<Card[]>(() => {
    const start = (this.currentPage() - 1) * this.pageSize();
    const end = start + this.pageSize();

    return this.cards().slice(start, end);
  });

  readonly hasNoResults = computed(
    () =>
      !this.loading() &&
      !this.error() &&
      this.cards().length === 0
  );

  readonly totalCount = computed(() => this.cards().length);
  readonly visibleCount = computed(() => this.visibleCards().length);
  readonly canGoPrevious = computed(() => this.currentPage() > 1);
  readonly canGoNext = computed(() => this.currentPage() < this.totalPages());

  getCardById(id: number): Card | undefined {
    return this.cards().find((card: Card) => card.id === id);
  }

  updateSearchTerm(term: string): void {
    this.searchTerm.set(term);
    this.currentPage.set(1);
  }

  updateTypeFilter(type: string): void {
    this.selectedType.set(type);
    this.currentPage.set(1);
  }

  updateAttributeFilter(attribute: string): void {
    this.selectedAttribute.set(attribute);
    this.currentPage.set(1);
  }

  updateRaceFilter(race: string): void {
    this.selectedRace.set(race);
    this.currentPage.set(1);
  }

  toggleFocusedCard(card: Card): void {
    const current = this.focusedCard();
    if (current?.id === card.id) {
      this.focusedCard.set(null);
    } else {
      this.focusedCard.set(card);
    }
  }

  setFocusedCard(card: Card | null): void {
    this.focusedCard.set(card);
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
