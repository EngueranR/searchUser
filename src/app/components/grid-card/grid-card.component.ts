import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css'],
})
export class GridCardComponent {
  @Input() persons: any;
}
