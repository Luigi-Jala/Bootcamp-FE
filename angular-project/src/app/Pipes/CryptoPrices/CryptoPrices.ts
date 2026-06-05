import { DecimalPipe } from "@angular/common";
import { Component } from "@angular/core";

// 1. IMPORTA EL REGISTRADOR Y LOS DATOS DE FRANCIA
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// 2. REGISTRA EL IDIOMA INMEDIATAMENTE
registerLocaleData(localeFr, 'fr');

@Component({
    selector: 'crypto-prices',
    imports: [DecimalPipe],
    templateUrl: './CryptoPrices.html'
})
export class CryptoPrices {
    protected readonly btcPrice = 64320.5; 
    protected readonly ethPrice = 3450.1234567;
}