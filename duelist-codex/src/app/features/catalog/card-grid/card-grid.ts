import { Component, input, output } from '@angular/core';

import { Card } from '../../../core/models/card.model';
import { CardItemComponent } from '../card-item/card-item';

@Component({
  selector: 'app-card-grid',
  imports: [CardItemComponent],
  templateUrl: './card-grid.html',
  styleUrl: './card-grid.css'
})
export class CardGridComponent {
  readonly cards = input.required<Card[]>();
  readonly cardSelected = output<Card>();

  selectCard(card: Card): void {
    this.cardSelected.emit(card);
  }
}

