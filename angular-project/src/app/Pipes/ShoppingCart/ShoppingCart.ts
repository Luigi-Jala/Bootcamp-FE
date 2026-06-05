import { DecimalPipe } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'shopping-cart',
  imports: [DecimalPipe],
  templateUrl: './ShoppingCart.html'
})
export class ShoppingCart {
  subtotal = 149.9; 
  shipping_fee = 15;
}