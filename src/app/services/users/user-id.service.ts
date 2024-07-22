import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { API_URL_USER } from './user.config';

@Injectable({
  providedIn: 'root',
})
export class UserIdService {
  constructor(private http: HttpClient) {}

  getUserById(userId: string | number): Promise<any> {
    const url = `${API_URL_USER}/${userId}`;
    return firstValueFrom(this.http.get(url));
  }
}
