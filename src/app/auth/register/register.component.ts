import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean;
  errorMsg = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
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

  onClickRegister() {
    if (this.form.valid) {
      this.isLoading = true;
      this.errorMsg = '';
      const { email, password } = this.form.value;
      this.authService.registerWithEmail(email, password).then(res => {
        const user: User = new User(res.user.uid, res.user.email);
        this.userService.addUser(user);
        this.router.navigate(['auth']);
      }).catch(e => {
        this.errorMsg = e.message;
      }).finally(() => {
        this.isLoading = false;
      });
    }
  }
}
