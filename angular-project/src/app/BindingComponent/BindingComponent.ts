import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './ChildComponent/ChildComponent';

@Component({
    selector: 'data-binding',
    imports: [FormsModule, ChildComponent],
    templateUrl: './BindingComponent.html',
    styleUrl: './BindingComponent.css',
})
export class BindingComponent {
  myColor = signal('#003cff'); 
}