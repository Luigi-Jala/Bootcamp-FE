import { AfterViewInit, Component, ElementRef, model, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBarComponent implements AfterViewInit {
  readonly searchTerm = model('');
  readonly searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  ngAfterViewInit(): void {
    this.searchInput()?.nativeElement.focus();
  }
}

