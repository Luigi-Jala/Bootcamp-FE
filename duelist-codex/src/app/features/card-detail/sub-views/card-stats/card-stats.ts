import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Card } from '../../../../core/models/card.model';
import { YgoStatValuePipe } from '../../../../shared/pipes/ygo-stat-value.pipe';

@Component({
  selector: 'app-card-stats',
  standalone: true,
  imports: [YgoStatValuePipe],
  templateUrl: './card-stats.html',
  styleUrl: './card-stats.css'
})
export class CardStatsComponent {
  private readonly route = inject(ActivatedRoute);

  get card(): Card | undefined {
    return this.route.parent?.snapshot.data['card'];
  }
}
