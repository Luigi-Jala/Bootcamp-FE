import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CryptoPrices } from './CryptoPrices/CryptoPrices';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CryptoPrices],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-pipes');
}
