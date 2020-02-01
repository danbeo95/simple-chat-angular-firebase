import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean;
  errorMsg = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.email, Validators.required]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)])
    });
  }
  get passwordFormCtrl(): FormControl {
    return this.form.get('password') as FormControl;
  }
  onClickLogin() {
    if (this.form.valid) {
      this.isLoading = true;
      this.errorMsg = '';
      const { email, password } = this.form.value;
      this.authService.loginWithEmail(email, password).then(() => {
        this.router.navigate(['chat']);
      }).catch(e => {
        this.errorMsg = e.message;
      }).finally(() => {
        this.isLoading = false;
      });
    }
  }
}
