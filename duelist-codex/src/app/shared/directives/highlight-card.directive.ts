import { Directive, ElementRef, inject, input, OnChanges, Renderer2 } from '@angular/core';
import { Card } from '../../core/models/card.model';

@Directive({
  selector: '[appHighlightCard]',
})
export class HighlightCardDirective implements OnChanges {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  readonly card = input<Card | null>(null, { alias: 'appHighlightCard' });
  readonly atkThreshold = input<number>(2500);
  readonly defThreshold = input<number>(2500);

  ngOnChanges(): void {
    this.updateHighlight();
  }

  private updateHighlight(): void {
    const currentCard = this.card();

    if (!currentCard) {
      this.renderer.removeClass(this.el.nativeElement, 'highlighted-card');
      return;
    }

    const hasHighAtk = (currentCard.atk ?? 0) >= this.atkThreshold();
    const hasHighDef = (currentCard.def ?? 0) >= this.defThreshold();

    if (hasHighAtk || hasHighDef) {
      this.renderer.addClass(this.el.nativeElement, 'highlighted-card');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'highlighted-card');
    }
  }
}
