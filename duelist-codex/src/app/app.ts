import { Component } from '@angular/core';

import { CatalogPageComponent } from './features/catalog/catalog-page/catalog-page';

@Component({
  selector: 'app-root',
  imports: [CatalogPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }