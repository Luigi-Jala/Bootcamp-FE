import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Card, CardApiResponse } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  getCards(): Observable<Card[]> {
    return this.http
      .get<CardApiResponse>(this.apiUrl)
      .pipe(map((response) => response.data));
  }
}

