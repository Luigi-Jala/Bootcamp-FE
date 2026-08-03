import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';

import { Card } from '../models/card.model';
import { CardApiService } from '../services/card-api.service';
import { CardStoreService } from '../state/card-store.service';

export const cardDetailResolver: ResolveFn<Card | null> = (route) => {
  const store = inject(CardStoreService);
  const cardApi = inject(CardApiService);
  const router = inject(Router);

  const rawId = route.paramMap.get('id');
  const cardId = rawId ? Number(rawId) : NaN;

  if (isNaN(cardId)) {
    alert('ID de carta no válido.');
    router.navigate(['/catalog']);
    return null;
  }

  const existingCard = store.getCardById(cardId);
  if (existingCard) {
    return existingCard;
  }

  return cardApi.getCardById(cardId).pipe(
    map((card) => {
      if (!card) {
        alert('La carta solicitada no existe.');
        router.navigate(['/catalog']);
        return null;
      }
      return card;
    }),
    catchError(() => {
      alert('Error al obtener la información de la carta.');
      router.navigate(['/catalog']);
      return of(null);
    })
  );
};
