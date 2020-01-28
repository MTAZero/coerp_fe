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

  // login(username: string, password: string) {
  //   const body = new HttpParams()
  //     .set('username', username)
  //     .set('password', password)
  //     .set('grant_type', 'password');

  //   return this.http.post(`/api/token`, body.toString(), {
  //     headers: new HttpHeaders()
  //       .set('Content-Type', 'application/x-www-form-urlencoded')
  //       .set(
  //         'Authorization',
  //         'BASIC RE9UTkVUOjVDNTFBQkUxLTY4MjgtNERBMS04NzBDLURCRTVDRjg5M0M1OQ=='
  //       )
  //   });
  //   // .pipe(
  //   //   map(user => {
  //   //     //   if (user && user.token) {
  //   //     //     this.user = user;
  //   //     //     this.cookieService.setCookie(
  //   //     //       'currentUser',
  //   //     //       JSON.stringify(user),
  //   //     //       1
  //   //     //     );
  //   //     //   }
  //   //     return user;
  //   //   })
  //   // );
  // }

  logout() {
    this.cookieService.deleteCookie('currentUser');
    this.user = null;
  }
}
