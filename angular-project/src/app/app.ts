import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';
import { CryptoPrices } from './Pipes/CryptoPrices/CryptoPrices';
import { ShoppingCart } from './Pipes/ShoppingCart/ShoppingCart';
import { Dashboard } from './Pipes/Dashboard/Dashboard';
import { CustomPipeComponent } from './Pipes/CustomPipe/CustomPipeComponent';
import { CompletedPipeComponent } from './Pipes/CustomPipe/CompletedPipeComponent';
import { BindingComponent } from './BindingComponent/BindingComponent';
import { ModelExample } from './ModelExample - Geronimo/model-example';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout, CryptoPrices, ShoppingCart, Dashboard, CustomPipeComponent, CompletedPipeComponent, BindingComponent, ModelExample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-project');
}
