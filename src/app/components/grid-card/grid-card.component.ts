import { Component } from '@angular/core';
import { UserIdService } from 'src/app/services/users/user-page.service';
@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css'],
})
export class GridCardComponent {
  constructor(private userPageService: UserIdService) {
    this.userPageService.postPageByNumber(1).then((data) => {
      console.log(data);
    });
  }
}
