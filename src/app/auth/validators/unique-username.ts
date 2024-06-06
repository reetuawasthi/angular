import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, FormControl } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private auth :AuthService) {}

  validate = (control: AbstractControl) => {
    const { value } = control;

    return this.auth.usernameAvailable(value)
      .pipe(
        map(() => {
          // console.log(value);
          return null;
        }),
        catchError((err) => {
          // console.log(err);
          if (err.error.username) {
            return of({ nonUniqueUsername: true });
          } else {
            return of({ noConnection: true });
          }
        })
      );
  };
}
