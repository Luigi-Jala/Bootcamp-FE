import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { delay, map, of } from 'rxjs';

import { Card, CardPrice } from '../../../../core/models/card.model';
import { CardApiService } from '../../../../core/services/card-api.service';
import { YgoPriceFormatterPipe } from '../../../../shared/pipes/ygo-price-formatter.pipe';

@Component({
  selector: 'app-card-prices',
  standalone: true,
  imports: [YgoPriceFormatterPipe],
  templateUrl: './card-prices.html',
  styleUrl: './card-prices.css'
})
export class CardPricesComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly cardApi = inject(CardApiService);

  readonly parentCard = computed<Card | null>(
    () => this.route.parent?.snapshot.data['card'] ?? null
  );

  // Resource diferido usando `params` y `stream` para cargar la información secundaria de precios (HU-06)
  readonly pricesResource = rxResource({
    params: () => this.parentCard()?.id,
    stream: ({ params: cardId }) => {
      if (!cardId) {
        return of<CardPrice | null>(null);
      }
      return this.cardApi.getCardById(cardId).pipe(
        delay(350),
        map((card) => card?.card_prices?.[0] ?? null)
      );
    }
  });

  readonly priceData = computed<CardPrice | null>(() => this.pricesResource.value() ?? null);
  readonly loading = computed(() => this.pricesResource.isLoading());
}
