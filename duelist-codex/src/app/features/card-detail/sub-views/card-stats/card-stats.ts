import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Card } from '../../../../core/models/card.model';

@Component({
  selector: 'app-card-stats',
  standalone: true,
  templateUrl: './card-stats.html',
  styleUrl: './card-stats.css'
})
export class CardStatsComponent {
  private readonly route = inject(ActivatedRoute);

  get card(): Card | undefined {
    return this.route.parent?.snapshot.data['card'];
  }
}
