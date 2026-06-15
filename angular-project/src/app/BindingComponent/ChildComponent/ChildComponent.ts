import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'child-binding',
    imports: [FormsModule],
    templateUrl: './ChildComponent.html',
    styleUrl: './ChildComponent.css',
})
export class ChildComponent {
  colorChild = model('#000000'); 
}