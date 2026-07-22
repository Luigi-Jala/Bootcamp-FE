import { Routes } from '@angular/router';

import { favoritesGuard } from './core/guards/favorites.guard';
import { cardDetailResolver } from './core/resolvers/card-detail.resolver';
import { CardDetailPageComponent } from './features/card-detail/card-detail-page/card-detail-page';
import { CardEffectComponent } from './features/card-detail/sub-views/card-effect/card-effect';
import { CardPricesComponent } from './features/card-detail/sub-views/card-prices/card-prices';
import { CardStatsComponent } from './features/card-detail/sub-views/card-stats/card-stats';
import { CatalogPageComponent } from './features/catalog/catalog-page/catalog-page';
import { CollectionPageComponent } from './features/collection/collection-page/collection-page';

export const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogPageComponent
  },
  {
    path: 'card/:id',
    component: CardDetailPageComponent,
    resolve: { card: cardDetailResolver },
    children: [
      {
        path: 'effect',
        component: CardEffectComponent
      },
      {
        path: 'stats',
        component: CardStatsComponent
      },
      {
        path: 'prices',
        component: CardPricesComponent
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
    component: CollectionPageComponent,
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
