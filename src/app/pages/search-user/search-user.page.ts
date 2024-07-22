import { Component, OnInit } from '@angular/core';
import { UserIdService } from 'src/app/services/users/user-page.service';
@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.page.html',
  styleUrls: ['./search-user.page.css'],
})
export class SearchUserPage {
  private pageNumber: number = 1;
  public persons: any[] = [];

  constructor(private userPageService: UserIdService) {}

  ngOnInit() {
    this.loadMore();
  }

  loadMore() {
    this.userPageService.postPageByNumber(this.pageNumber).then((data) => {
      this.persons = [...this.persons, ...data.data];
      this.pageNumber++;
    });
  }
}
