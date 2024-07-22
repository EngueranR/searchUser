import { Component, OnInit } from '@angular/core';
import { UserIdService } from 'src/app/services/users/user-page.service';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css'],
})
export class GridCardComponent implements OnInit {
  private pageNumber: number = 1;
  public people: any[] = [];

  constructor(private userPageService: UserIdService) {}

  ngOnInit() {
    this.loadMore();
  }

  loadMore() {
    this.userPageService.postPageByNumber(this.pageNumber).then((data) => {
      this.people = [...this.people, ...data.data];
      this.pageNumber++;
    });
  }
}
