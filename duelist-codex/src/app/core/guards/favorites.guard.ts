import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { CollectionService } from '../services/collection.service';

export const favoritesGuard: CanActivateFn = () => {
  const collectionService = inject(CollectionService);
  const router = inject(Router);

  if (collectionService.hasFavorites()) {
    return true;
  }

  alert('Debes agregar al menos una carta a tus favoritos para acceder a Mi Colección.');
  return router.createUrlTree(['/catalog']);
};
