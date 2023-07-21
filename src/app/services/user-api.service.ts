import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private urlBase: string = 'http://localhost:9000/angularapi/api/v1';
  private pathUsers: string = '/users';
  private httpHeaders: HttpHeaders = new HttpHeaders();
  private httpParams: HttpParams = new HttpParams();

  constructor(private httpClient: HttpClient) {
    this.httpHeaders = this.httpHeaders.append(
      'Content-Type',
      'application/json'
    );
  }

  public doLogin(username: string, password: string): Observable<User> {
    this.httpParams = new HttpParams();
    this.httpParams = this.httpParams.append('username', username);
    this.httpParams = this.httpParams.append('password', password);

    return this.httpClient.get<User>(this.urlBase + this.pathUsers, {
      headers: this.httpHeaders,
      params: this.httpParams,
    });
  }
}
