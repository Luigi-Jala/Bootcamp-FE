import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completed',
  pure: false
})
export class CompletedPipe implements PipeTransform {
  transform(tareas: any[]): any[] {
    console.log('¡Pipe ejecutada!');
    return tareas.filter(t => t.completada);
  }
}