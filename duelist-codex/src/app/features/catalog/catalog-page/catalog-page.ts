import { Component, inject, OnInit } from '@angular/core';

import { Card } from '../../../core/models/card.model';
import { CardStoreService } from '../../../core/state/card-store.service';
import { CardDetailComponent } from '../card-detail/card-detail';
import { CardGridComponent } from '../card-grid/card-grid';
import { SearchBarComponent } from '../search-bar/search-bar';

@Component({
  selector: 'app-catalog-page',
  imports: [SearchBarComponent, CardGridComponent, CardDetailComponent],
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css'
})
export class CatalogPageComponent implements OnInit {
  protected readonly store = inject(CardStoreService);

  ngOnInit(): void {
    this.store.loadCards();
  }

  searchCards(term: string): void {
    this.store.updateSearchTerm(term);
  }

  selectCard(card: Card): void {
    this.store.selectCard(card);
  }

  backToCatalog(): void {
    this.store.clearSelectedCard();
  }
}

