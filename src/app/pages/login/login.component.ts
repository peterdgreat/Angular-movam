import { Component, OnInit } from '@angular/core';
import { Validators, UntypedFormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
    private fb: UntypedFormBuilder,
  ) {}

  ngOnDestroy(): void {

  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if (this.loginDetails.invalid) {
      return;
    } else {


    }

    // this.router.navigate(['client/user/otp'], { state: { routeUrl: 'client/user/dashboard'} });
    console.log(this.loginDetails.value);
  }
  forgotPassword() {
    console.log('Forgot Password');
  }

}
