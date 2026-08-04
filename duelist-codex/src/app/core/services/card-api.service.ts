import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import { Card, CardApiResponse, CardSearchParams } from '../models/card.model';

interface CacheEntry<T> {
  timestamp: number;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class CardApiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  private readonly cache = new Map<string, CacheEntry<any>>();
  private readonly CACHE_TTL_MS = 10000; // 10 segundos de política de caché

  searchCards(searchParams: CardSearchParams): Observable<Card[]> {
    let httpParams = new HttpParams();

    if (searchParams.fname?.trim()) {
      httpParams = httpParams.set('fname', searchParams.fname.trim());
    }
    if (searchParams.type && searchParams.type !== 'any') {
      httpParams = httpParams.set('type', searchParams.type);
    }
    if (searchParams.attribute && searchParams.attribute !== 'any') {
      httpParams = httpParams.set('attribute', searchParams.attribute);
    }
    if (searchParams.race && searchParams.race !== 'any') {
      httpParams = httpParams.set('race', searchParams.race);
    }

    const cacheKey = httpParams.toString() || 'default_catalog';
    const cached = this.getFromCache<Card[]>(cacheKey);
    if (cached) {
      return of(cached);
    }

    return this.http
      .get<CardApiResponse>(this.apiUrl, { params: httpParams })
      .pipe(
        map((response) => response.data ?? []),
        map((cards) => {
          this.setInCache(cacheKey, cards);
          return cards;
        }),
        catchError((error) => {
          return of([]);
        })
      );
  }

  getCardById(id: number): Observable<Card | null> {
    if (!id || isNaN(id)) {
      return of(null);
    }

    const cacheKey = `card_id_${id}`;
    const cached = this.getFromCache<Card | null>(cacheKey);
    if (cached) {
      return of(cached);
    }

    const params = new HttpParams().set('id', id.toString());

    return this.http
      .get<CardApiResponse>(this.apiUrl, { params })
      .pipe(
        map((response) => response.data?.[0] ?? null),
        map((card) => {
          if (card) {
            this.setInCache(cacheKey, card);
          }
          return card;
        }),
        catchError(() => of(null))
      );
  }

  private getFromCache<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) {
      return null;
    }
    const isExpired = Date.now() - entry.timestamp > this.CACHE_TTL_MS;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }
    return entry.data as T;
  }

  private setInCache<T>(key: string, data: T): void {
    this.cache.set(key, {
      timestamp: Date.now(),
      data
    });
  }
}


