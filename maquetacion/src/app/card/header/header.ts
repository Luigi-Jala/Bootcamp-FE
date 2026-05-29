import { Component, input } from "@angular/core";

@Component({
    selector: 'header',
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    name = input<string>();
}