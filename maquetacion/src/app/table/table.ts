import { Component } from "@angular/core";
import { Placeholder } from "./placeholder/placeholder";

@Component({
    imports: [Placeholder],
    selector: 'table',
    templateUrl: './table.html',
    styleUrl: './table.css'
})
export class Table { }