import { Component, input } from "@angular/core";

@Component({
    selector: 'spheres',
    templateUrl: './spheres.html',
    styleUrl: './spheres.css',
})
export class Spheres {
    n = input<Number>(1);
}