import { Component } from "@angular/core";
import { ReversePipe } from "./Reverse.pipe";

@Component({
    selector: 'custom-pipe',
    template: ` Reverse Machine: {{ word | reverse:'-'}} `,
    imports: [ReversePipe],
})
export class CustomPipeComponent {
    protected readonly word = 'Hello World';
}