import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Card } from '../../../../core/models/card.model';

@Component({
  selector: 'app-card-effect',
  standalone: true,
  templateUrl: './card-effect.html',
  styleUrl: './card-effect.css'
})
export class CardEffectComponent {
  private readonly route = inject(ActivatedRoute);

  get card(): Card | undefined {
    return this.route.parent?.snapshot.data['card'];
  }
}
