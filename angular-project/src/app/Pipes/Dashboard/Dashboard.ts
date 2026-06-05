import { DecimalPipe } from "@angular/common";
import { Component } from "@angular/core";

// componente.ts
@Component({
  selector: 'app-dashboard',
  imports: [DecimalPipe],
  templateUrl: './Dashboard.html'
})
export class Dashboard {
  cpuUsage = 200 / 3;
}