import { AfterViewInit, Component, ElementRef, input, output, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBarComponent implements AfterViewInit {
  readonly searchTerm = input('');
  readonly searchChange = output<string>();
  readonly searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  term = '';

  ngAfterViewInit(): void {
    this.term = this.searchTerm();
    this.searchInput()?.nativeElement.focus();
  }

  onSearchChange(term: string): void {
    this.searchChange.emit(term);
  }
}

