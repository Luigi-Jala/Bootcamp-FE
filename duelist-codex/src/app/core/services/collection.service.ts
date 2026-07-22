import { computed, Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'duelist_favorites';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  readonly favorites = signal<number[]>(this.loadFavoritesFromStorage());

  readonly hasFavorites = computed(() => this.favorites().length > 0);
  readonly favoritesCount = computed(() => this.favorites().length);

  isFavorite(cardId: number): boolean {
    return this.favorites().includes(cardId);
  }

  toggleFavorite(cardId: number): void {
    const current = this.favorites();
    let updated: number[];

    if (current.includes(cardId)) {
      updated = current.filter((id) => id !== cardId);
    } else {
      updated = [...current, cardId];
    }

    this.favorites.set(updated);
    this.saveFavoritesToStorage(updated);
  }

  private loadFavoritesFromStorage(): number[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveFavoritesToStorage(ids: number[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch (e) {
      console.error('Error saving favorites to localStorage', e);
    }
  }
}
