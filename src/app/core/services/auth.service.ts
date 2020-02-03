import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CookieService } from '../services/cookie.service';
import { User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user: User;
  url = 'http://27.72.147.222:1230';
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  public currentUser(): User {
    if (!this.user) {
      this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
    }
    return this.user;
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`/api/login`, { email, password })
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            this.user = user;
            // store user details and jwt in cookie
            this.cookieService.setCookie(
              'currentUser',
              JSON.stringify(user),
              1
            );
          }
          return user;
        })
      );
  }

  loginTest(username: string, password: string) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const bodyTest =
      'grant_type=password&username=' + username + '&password=' + password;

    return this.http.post(`http://27.72.147.222:1230/token`, bodyTest, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache',
        Authorization:
          'BASIC RE9UTkVUOjVDNTFBQkUxLTY4MjgtNERBMS04NzBDLURCRTVDRjg5M0M1OQ=='
      })
    });
    // .pipe(
    //   map(user => {
    //     //   if (user && user.token) {
    //     //     this.user = user;
    //     //     this.cookieService.setCookie(
    //     //       'currentUser',
    //     //       JSON.stringify(user),
    //     //       1
    //     //     );
    //     //   }
    //     return user;
    //   })
    // );
  }

  getAll() {
    return this.http.get(`http://27.72.147.222:1230/api/staffs/all`, {
      headers: new HttpHeaders().set(
        'Authorization',
        // tslint:disable-next-line:max-line-length
        'Bearer p_mGIdC0dpZODEknjmxnnKypBMYNQJ3tqEL-Inswxbntqb5HMcGaXlD61UBg_g8b3g39DgauK-N3RihXk8eKHj7CigTyLSf7Jv6f4k_3Mg49gJ-oAOexOClWOmrfwcwDxiP3G9HqGERysiaGzgwh-VQIOJz-oSQrJDjCOnmal6eHrBqxoKwt63HVfDRJ5QhHdVw8-szNn_PwPwQZvsqaRG20lutDgls0Ck_Jvi7Cse-YcEEtfvnuw4xJKreWc353fTpeGweBnhBUmo1UIUYBD2d4IUAizoTtr2jTy0oIdN8OI4A-qBBzq1jHl2AYyi5vIfahFFOa4-ZNinyr1QWFdqt5-Ve5MIUycp0NlfDsl2UyZ2g_EbOwuU0vSfrPtjfHqFkD61YAyiMet8RMUUxx1A'
      )
    });
  }

  logout() {
    this.cookieService.deleteCookie('currentUser');
    this.user = null;
  }
}
