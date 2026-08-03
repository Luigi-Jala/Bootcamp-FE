import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Card } from '../../../core/models/card.model';
import { CollectionService } from '../../../core/services/collection.service';
import { CardStoreService } from '../../../core/state/card-store.service';
import { HighlightCardDirective } from '../../../shared/directives/highlight-card.directive';

@Component({
  selector: 'app-card-item',
  imports: [RouterLink, HighlightCardDirective],
  templateUrl: './card-item.html',
  styleUrl: './card-item.css'
})
export class CardItemComponent {
  private readonly collectionService = inject(CollectionService);
  private readonly store = inject(CardStoreService);

  readonly card = input.required<Card>();

  readonly imageUrl = computed(
    () => this.card().card_images?.[0]?.image_url_small ?? ''
  );

  readonly readableType = computed(
    () => this.card().humanReadableCardType ?? this.card().type
  );

  readonly isFavorite = computed(() =>
    this.collectionService.isFavorite(this.card().id)
  );

  readonly isFocused = computed(
    () => this.store.focusedCard()?.id === this.card().id
  );

  toggleFavorite(event: Event): void {
    event.stopPropagation();
    this.collectionService.toggleFavorite(this.card().id);
  }

  toggleFocus(event: Event): void {
    event.stopPropagation();
    this.store.toggleFocusedCard(this.card());
  }
}
