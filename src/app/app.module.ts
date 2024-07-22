import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchUserPage } from './pages/search-user/search-user.page';
import { ListCardComponent } from './components/list-card/list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GridCardComponent,
    SearchBarComponent,
    SearchUserPage,
    ListCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
