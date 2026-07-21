import { Component, computed, input, output } from '@angular/core';

import { Card } from '../../../core/models/card.model';
import { InfoSection, InfoTabsComponent } from '../../../shared/info-tabs/info-tabs';

@Component({
  selector: 'app-card-detail',
  imports: [InfoTabsComponent],
  templateUrl: './card-detail.html',
  styleUrl: './card-detail.css'
})
export class CardDetailComponent {
  readonly card = input.required<Card>();
  readonly back = output<void>();

  readonly imageUrl = computed(
    () => this.card().card_images?.[0]?.image_url ?? ''
  );

  readonly readableType = computed(
    () => this.card().humanReadableCardType ?? this.card().type
  );

  readonly sections = computed<InfoSection[]>(() => [
    {
      title: 'Effect',
      lines: [this.card().desc]
    },
    {
      title: 'Statistics',
      lines: this.buildStatisticLines()
    },
    {
      title: 'Price',
      lines: this.buildPriceLines()
    }
  ]);

  goBack(): void {
    this.back.emit();
  }

  private buildStatisticLines(): string[] {
    const card = this.card();
    const lines = [
      `Type: ${this.readableType()}`
    ];

    if (card.race) {
      lines.push(`Race: ${card.race}`);
    }

    if (card.attribute) {
      lines.push(`Attribute: ${card.attribute}`);
    }

    if (card.level !== undefined) {
      lines.push(`Level: ${card.level}`);
    }

    if (card.atk !== undefined) {
      lines.push(`ATK: ${card.atk}`);
    }

    if (card.def !== undefined) {
      lines.push(`DEF: ${card.def}`);
    }

    if (card.archetype) {
      lines.push(`Archetype: ${card.archetype}`);
    }

    return lines;
  }

  private buildPriceLines(): string[] {
    const price = this.card().card_prices?.[0];

    if (!price) {
      return ['No price data available.'];
    }

    return [
      `Cardmarket: $${price.cardmarket_price}`,
      `TCGPlayer: $${price.tcgplayer_price}`,
      `eBay: $${price.ebay_price}`,
      `Amazon: $${price.amazon_price}`,
      `CoolStuffInc: $${price.coolstuffinc_price}`
    ];
  }
}

