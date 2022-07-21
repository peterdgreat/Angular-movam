import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  type: string = 'submit';
  submitted: boolean = false;
  isOpen: boolean = false;
  hide: boolean = true;
  errorMessage: string = '';
  loginDetails = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(
        '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$'
      ),
    ]),
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userDetails: UserDetailsService
  ) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if (this.loginDetails.invalid) {
      return;
    } else {
      this.userDetails.setUserDetails([
        {
          email: this.loginDetails.value?.email!,
          name: this.loginDetails.value.name!,
          password: this.loginDetails.value.password!,
        },
      ]);
      this.router.navigate(['/user-details']);
    }

    console.log(this.loginDetails.value);
  }
}
