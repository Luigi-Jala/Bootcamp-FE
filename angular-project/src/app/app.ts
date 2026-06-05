import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';
import { CryptoPrices } from './Pipes/CryptoPrices/CryptoPrices';
import { ShoppingCart } from './Pipes/ShoppingCart/ShoppingCart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout, CryptoPrices, ShoppingCart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-project');
}
