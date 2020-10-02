import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  url = 'http://27.72.88.15:83';
  constructor(private http: HttpClient, private storageService: StorageService) {}

  public accessToken() {
    return this.storageService.getItem('access_token');
  }

  login(username: string, password: string) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    return this.http
      .post(`http://27.72.88.15:83/token`, body.toString(), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache',
          Authorization: 'BASIC RE9UTkVUOjVDNTFBQkUxLTY4MjgtNERBMS04NzBDLURCRTVDRjg5M0M1OQ=='
        })
      })
      .pipe(map(this.extractData));
  }

  forgot(email: string) {
    const body = new HttpParams().set('email', email);

    return this.http
      .post(`http://27.72.88.15:83/api/authentication/forgotpassword`, body.toString(), {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache'
        })
      })
      .pipe(map(this.extractData));
  }

  logout() {
    this.storageService.deleteItem('access_token');
    this.storageService.deleteItem('userName');
  }

  private extractData(res: HttpResponse<object>) {
    const body = res;
    return body || {};
  }
}
