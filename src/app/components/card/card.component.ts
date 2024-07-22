import { Component } from '@angular/core';
import { UserIdService } from 'src/app/services/users/user-id.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor(private userIdService: UserIdService) {}

  ngOnInit() {
    this.userIdService.getUserById(56190).then((data) => {
      console.log(data);
    });
  }
}
