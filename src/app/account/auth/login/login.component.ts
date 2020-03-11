import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../core/services/common/storage.service';

import { AuthenticationService } from '../../../core/services/common/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, of } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  private destroyed$ = new Subject();
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngAfterViewInit() {
    document.body.classList.add('authentication-bg');
    document.body.classList.add('authentication-bg-pattern');
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const login$ = this.authenticationService
      .login(this.f.username.value, this.f.password.value)
      .pipe(takeUntil(this.destroyed$), catchError(this.catchError));

    login$.subscribe((res: any) => {
      if (res) {
        if (res && res.access_token && res.userName) {
          this.storageService.setItem('access_token', res.access_token);
          this.storageService.setItem('userName', res.userName);
          this.storageService.setItem('thumbnail', res.url_thumbnai);
          this.router.navigate([this.returnUrl]);
        }
      }
      if (typeof res !== 'object') {
        this.error = res;
      }
    });
  }

  private catchError(err) {
    return of(err);
  }
}
