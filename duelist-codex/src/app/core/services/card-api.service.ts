import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import { Card, CardApiResponse, CardSearchParams } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

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

    return this.http
      .get<CardApiResponse>(this.apiUrl, { params: httpParams })
      .pipe(
        map((response) => response.data ?? []),
        catchError((error) => {
          return of([]);
        })
      );
  }

  getCardById(id: number): Observable<Card | null> {
    if (!id || isNaN(id)) {
      return of(null);
    }

    const params = new HttpParams().set('id', id.toString());

    return this.http
      .get<CardApiResponse>(this.apiUrl, { params })
      .pipe(
        map((response) => response.data?.[0] ?? null),
        catchError(() => of(null))
      );
  }
}


