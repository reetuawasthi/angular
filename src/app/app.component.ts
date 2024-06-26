import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  signedin$: BehaviorSubject<boolean>;
  // signedin = false;
  // title = 'emailclient';
  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }
  // ngOnInit() {
  //   this.authService.signedin$.subscribe((signedin) => {
  //     this.signedin = signedin;
  //   });
  // }
  ngOnInit() {
    this.authService.checkAuth().subscribe(() => {});
    // setTimeout(() => {
    //   this.authService.signout().subscribe(() => {});
    // }, 5000);
  }
}
