import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/api/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.scss']
})
export class PasswordresetComponent implements OnInit, AfterViewInit {
  resetForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngAfterViewInit() {
    document.body.classList.add('authentication-bg');
    document.body.classList.add('authentication-bg-pattern');
  }

  get f() {
    return this.resetForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.resetForm.invalid) {
      return;
    }

    this.authService.forgotPassword(this.resetForm.value.email).subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this.router.navigate(['/account/login']);
        } else {
          Swal.fire({
            position: 'top-end',
            type: 'error',
            title: 'Thất bại',
            showConfirmButton: false,
            timer: 2000
          });
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Thất bại',
          showConfirmButton: false,
          timer: 2000
        });
      }
    );
  }
}
