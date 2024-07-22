import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { API_URL_USER } from './user.config';

@Injectable({
  providedIn: 'root',
})
export class UserIdService {
  constructor(private http: HttpClient) {}

  postPageByNumber(pageNumber: string | number): Promise<any> {
    const url = `${API_URL_USER}/${pageNumber}`;
    return firstValueFrom(this.http.post(url, {}));
  }
}
