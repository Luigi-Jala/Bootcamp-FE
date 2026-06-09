import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedPipe } from './Completed.pipe';

@Component({
  selector: 'completed-pipe',
  standalone: true,
  imports: [CommonModule, CompletedPipe],
  template: `
    <h2>Tareas Completadas</h2>
    <ul>
      @for (t of tareas | completed; track $index) {
        <li>{{ t.nombre }}</li>
      }
    </ul>

    <button (click)="agregarConPush()">1. Agregar con Push (No funciona)</button>
    <button (click)="agregarConReferencia()">2. Agregar con Nueva Referencia (Sí funciona)</button>
  `
})
export class CompletedPipeComponent {
  tareas = [
    { nombre: 'Aprender Angular', completada: true },
    { nombre: 'Pagar la luz', completada: true }
  ];

  // CASO 1: LA PIPE PURA NO SE ENTERA
  agregarConPush() {
    this.tareas.push({ nombre: 'Ir al gimnasio', completada: true });
  }

  // CASO 2: LA PIPE PURA SÍ SE ENTERA
  agregarConReferencia() {
    this.tareas = [...this.tareas, { nombre: 'Comprar comida', completada: true }];
  }
}