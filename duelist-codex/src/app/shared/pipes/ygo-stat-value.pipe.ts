import { Pipe, PipeTransform } from '@angular/core';

/**
 * Formatea valores de estadísticas de cartas (ATK / DEF).
 * La API de YGOPRODeck usa -1 para representar "?" en cartas
 * con estadísticas variables (ej: Barrel Dragon, Question).
 * Ejemplo: -1 → "?",  2500 → "2500"
 */
@Pipe({
  name: 'ygostat',
  standalone: true
})
export class YgoStatValuePipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined) {
      return '—';
    }
    if (value === -1) {
      return '?';
    }
    return value.toString();
  }
}
