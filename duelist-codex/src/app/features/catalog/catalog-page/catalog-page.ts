import { Component, inject } from '@angular/core';

import { CardStoreService } from '../../../core/state/card-store.service';
import { CardGridComponent } from '../card-grid/card-grid';
import { SearchBarComponent } from '../search-bar/search-bar';

@Component({
  selector: 'app-catalog-page',
  imports: [SearchBarComponent, CardGridComponent],
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css'
})
export class CatalogPageComponent {
  protected readonly store = inject(CardStoreService);

  searchCards(term: string): void {
    this.store.updateSearchTerm(term);
  }

  previousPage(): void {
    this.store.goToPreviousPage();
  }

  nextPage(): void {
    this.store.goToNextPage();
  }
}
