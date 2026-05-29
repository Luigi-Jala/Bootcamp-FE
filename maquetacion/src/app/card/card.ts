import { Component } from "@angular/core";
import { Header } from "./header/header";
import { Spheres } from "./spheres/spheres";

@Component({
    selector: 'card',
    templateUrl: './card.html',
    styleUrl: './card.css',
    imports: [Header, Spheres]
})
export class Card { }