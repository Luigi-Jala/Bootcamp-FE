import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card';
import { Table } from './table/table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, Table],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('flexbox-layout');
}
