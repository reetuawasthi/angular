import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService, SignupCredentials } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.uniquUsername.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    {
      validators: [this.matchpassword.validate],
    }
  );
  ngOnInit(): void {}
  constructor(
    private matchpassword: MatchPassword,
    private uniquUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }
    this.authService
      .signup(this.authForm.value as SignupCredentials)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/inbox');
        },
        error: (error) => {
          if (!error.status) {
            this.authForm.setErrors({ noConnection: true });
          }
        },
      });
  } 
}
