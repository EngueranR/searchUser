import { Component, Input, OnInit } from '@angular/core';
import { UserIdService } from 'src/app/services/users/user-page.service';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css'],
})
export class GridCardComponent {
  @Input() persons: any;
}
