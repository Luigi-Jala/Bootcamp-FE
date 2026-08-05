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
  readonly selectedType = input('any');
  readonly selectedAttribute = input('any');
  readonly selectedRace = input('any');

  readonly searchChange = output<string>();
  readonly typeChange = output<string>();
  readonly attributeChange = output<string>();
  readonly raceChange = output<string>();

  readonly searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  readonly cardTypes = [
    { value: 'any', label: 'All Types' },
    { value: 'Normal Monster', label: 'Normal Monster' },
    { value: 'Effect Monster', label: 'Effect Monster' },
    { value: 'Spell Card', label: 'Spell Card' },
    { value: 'Trap Card', label: 'Trap Card' },
    { value: 'Fusion Monster', label: 'Fusion Monster' },
    { value: 'Synchro Monster', label: 'Synchro Monster' },
    { value: 'XYZ Monster', label: 'XYZ Monster' },
    { value: 'Link Monster', label: 'Link Monster' }
  ];

  readonly attributes = [
    { value: 'any', label: 'All Attributes' },
    { value: 'DARK', label: 'DARK' },
    { value: 'EARTH', label: 'EARTH' },
    { value: 'FIRE', label: 'FIRE' },
    { value: 'LIGHT', label: 'LIGHT' },
    { value: 'WATER', label: 'WATER' },
    { value: 'WIND', label: 'WIND' },
    { value: 'DIVINE', label: 'DIVINE' }
  ];

  readonly races = [
    { value: 'any', label: 'All Races/Subtypes' },
    { value: 'Dragon', label: 'Dragon' },
    { value: 'Spellcaster', label: 'Spellcaster' },
    { value: 'Warrior', label: 'Warrior' },
    { value: 'Fiend', label: 'Fiend' },
    { value: 'Zombie', label: 'Zombie' },
    { value: 'Machine', label: 'Machine' },
    { value: 'Aqua', label: 'Aqua' },
    { value: 'Pyro', label: 'Pyro' },
    { value: 'Normal', label: 'Normal' },
    { value: 'Continuous', label: 'Continuous' },
    { value: 'Equip', label: 'Equip' },
    { value: 'Quick-Play', label: 'Quick-Play' }
  ];

  ngAfterViewInit(): void {
    this.searchInput()?.nativeElement.focus();
  }

  onSearch(term: string): void {
    this.searchChange.emit(term);
  }

  onTypeChange(type: string): void {
    this.typeChange.emit(type);
  }

  onAttributeChange(attribute: string): void {
    this.attributeChange.emit(attribute);
  }

  onRaceChange(race: string): void {
    this.raceChange.emit(race);
  }
}
