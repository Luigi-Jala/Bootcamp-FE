import { DecimalPipe } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'crypto-prices',
    imports: [DecimalPipe],
    templateUrl: './CryptoPrices.html'
})
export class CryptoPrices {
    protected readonly btcPrice = 64320.567; 
    protected readonly ethPrice = 3450.1234567;
}