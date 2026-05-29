import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';
import { Table } from './table/table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout, Table],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('flexbox-layout');
}
