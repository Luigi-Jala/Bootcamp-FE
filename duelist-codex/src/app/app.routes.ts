import { Routes } from '@angular/router';

import { favoritesGuard } from './core/guards/favorites.guard';
import { cardDetailResolver } from './core/resolvers/card-detail.resolver';

export const routes: Routes = [
  {
    path: 'catalog',
    loadComponent: () =>
      import('./features/catalog/catalog-page/catalog-page').then(
        (m) => m.CatalogPageComponent
      )
  },
  {
    path: 'card/:id',
    loadComponent: () =>
      import('./features/card-detail/card-detail-page/card-detail-page').then(
        (m) => m.CardDetailPageComponent
      ),
    resolve: { card: cardDetailResolver },
    children: [
      {
        path: 'effect',
        loadComponent: () =>
          import('./features/card-detail/sub-views/card-effect/card-effect').then(
            (m) => m.CardEffectComponent
          )
      },
      {
        path: 'stats',
        loadComponent: () =>
          import('./features/card-detail/sub-views/card-stats/card-stats').then(
            (m) => m.CardStatsComponent
          )
      },
      {
        path: 'prices',
        loadComponent: () =>
          import('./features/card-detail/sub-views/card-prices/card-prices').then(
            (m) => m.CardPricesComponent
          )
      },
      {
        path: '',
        redirectTo: 'effect',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'collection',
    loadComponent: () =>
      import('./features/collection/collection-page/collection-page').then(
        (m) => m.CollectionPageComponent
      ),
    canActivate: [favoritesGuard]
  },
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'catalog'
  }
];
