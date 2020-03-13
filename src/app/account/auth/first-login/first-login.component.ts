import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/api/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.scss']
})
export class FirstLoginComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      OldPassword: ['', [Validators.required]],
      NewPassword: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]]
    });
  }

  ngAfterViewInit() {
    document.body.classList.add('authentication-bg');
    document.body.classList.add('authentication-bg-pattern');
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    const id = localStorage.getItem('sta_id');

    if (this.form.invalid) {
      return;
    }
    this.authService.changePassword({ id }, this.form.value).subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Đổi mật khẩu thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this.router.navigate(['/account/login']);
        } else {
          Swal.fire({
            position: 'top-end',
            type: 'error',
            title: 'Đổi mật khẩu thất bại',
            showConfirmButton: false,
            timer: 2000
          });
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Đổi mật khẩu thất bại',
          showConfirmButton: false,
          timer: 2000
        });
      }
    );
  }
}
