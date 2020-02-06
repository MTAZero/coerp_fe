import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { map } from 'rxjs/operators';

import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  url = 'http://27.72.147.222:1230';
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  public accessToken() {
    return this.storageService.getItem('access_token');
  }

  login(username: string, password: string) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    return this.http
      .post(`http://27.72.147.222:1230/token`, body.toString(), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache',
          Authorization:
            'BASIC RE9UTkVUOjVDNTFBQkUxLTY4MjgtNERBMS04NzBDLURCRTVDRjg5M0M1OQ=='
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
