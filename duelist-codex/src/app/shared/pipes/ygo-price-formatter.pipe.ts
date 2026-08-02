import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ygoprice',
  standalone: true
})
export class YgoPriceFormatterPipe implements PipeTransform {
  transform(value: string | number | null | undefined): string {
    if (value === null || value === undefined || value === '') {
      return 'Sin cotización';
    }

    const numericValue = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(numericValue) || numericValue === 0) {
      return 'Sin cotización';
    }

    return `$${numericValue.toFixed(2)} USD`;
  }
}
