import { Component, computed, input, signal } from '@angular/core';

export interface InfoSection {
  title: string;
  lines: string[];
}

@Component({
  selector: 'app-info-tabs',
  templateUrl: './info-tabs.html',
  styleUrl: './info-tabs.css'
})
export class InfoTabsComponent {
  readonly sections = input.required<InfoSection[]>();
  readonly selectedIndex = signal(0);

  readonly activeSection = computed(
    () => this.sections()[this.selectedIndex()] ?? this.sections()[0]
  );

  selectSection(index: number): void {
    this.selectedIndex.set(index);
  }
}

