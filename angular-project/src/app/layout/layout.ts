import { Component, signal, Signal } from '@angular/core';

@Component({
    selector: 'layout',
    templateUrl: './layout.html',
    styleUrl: './layout.css'
})
export class Layout {
    protected readonly sidebar = signal(true); 

    protected toggleSideBar() : void {
        this.sidebar.update( prev => !prev);
    }
}