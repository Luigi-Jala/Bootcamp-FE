import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Card } from '../../../../core/models/card.model';
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

  get card(): Card | undefined {
    return this.route.parent?.snapshot.data['card'];
  }

  get priceData() {
    return this.card?.card_prices?.[0];
  }
}
