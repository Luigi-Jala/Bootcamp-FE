import { Component, computed, inject, input, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { Card } from '../../../core/models/card.model';
import { CollectionService } from '../../../core/services/collection.service';
import { HighlightCardDirective } from '../../../shared/directives/highlight-card.directive';

@Component({
  selector: 'app-card-detail-page',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, HighlightCardDirective],
  templateUrl: './card-detail-page.html',
  styleUrl: './card-detail-page.css'
})
export class CardDetailPageComponent {
  private readonly collectionService = inject(CollectionService);
  readonly card = input<Card | null>(null);

  readonly imageUrl = computed(
    () => this.card()?.card_images?.[0]?.image_url ?? ''
  );

  readonly isFavorite = computed(() =>
    this.card() ? this.collectionService.isFavorite(this.card()!.id) : false
  );

  toggleFavorite(): void {
    if (this.card()) {
      this.collectionService.toggleFavorite(this.card()!.id);
    }
  }
}
