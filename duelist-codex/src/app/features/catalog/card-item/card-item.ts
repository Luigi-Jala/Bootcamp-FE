import { Component, computed, input, output } from '@angular/core';

import { Card } from '../../../core/models/card.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.html',
  styleUrl: './card-item.css'
})
export class CardItemComponent {
  readonly card = input.required<Card>();
  readonly cardSelected = output<Card>();

  readonly imageUrl = computed(
    () => this.card().card_images?.[0]?.image_url_small ?? ''
  );

  readonly readableType = computed(
    () => this.card().humanReadableCardType ?? this.card().type
  );

  selectCard(): void {
    this.cardSelected.emit(this.card());
  }
}

