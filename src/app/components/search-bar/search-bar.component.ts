import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string[]>();
  searchTerm: string = '';
  terms: string[] = [];

  onSearch() {
    if (this.searchTerm.trim()) {
      this.terms.push(this.searchTerm.trim());
      this.searchTerm = '';
      this.search.emit(this.terms);
    }
  }

  removeTerm(index: number) {
    this.terms.splice(index, 1);
    this.search.emit(this.terms);
  }
}
