import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'data-binding',
    imports: [FormsModule],
    templateUrl: './BindingComponent.html',
})
export class BindingComponent {
  myColor = model('#000000'); 
}