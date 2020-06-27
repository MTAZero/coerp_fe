import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../core/services/common/storage.service';

import { AuthenticationService } from '../../../core/services/common/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, of } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  private destroyed$ = new Subject();
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;

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
      password: ['', Validators.required],
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

    login$.subscribe(
      (res: any) => {
        if (res) {
          if (res && res.access_token && res.staff_Name) {
            this.storageService.setItem('access_token', res.access_token);
            this.storageService.setItem('userName', res.staff_Name);
            this.storageService.setItem('thumbnail', res.url_thumbnai);
            this.storageService.setItem('sta_id', res.sta_id);
            this.storageService.setItem('role', res.Role);

            if (res.sta_login === 'True') {
              this.returnUrl = '/account/first-login';
              this.router.navigate([this.returnUrl]);
            } else {
              Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'Đăng nhập thành công',
                showConfirmButton: false,
                timer: 2000,
              });
              this.router.navigate([this.returnUrl]);
            }
          }
        }
        console.log(res);
        if (typeof res !== 'object') {
          Swal.fire({
            position: 'top-end',
            type: 'error',
            title: res.error_description,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      },
      (e) => console.log(e)
    );
  }

  private catchError(err) {
    return of(err);
  }
}
