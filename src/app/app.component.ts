import { Component } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { Login2Component } from "./auth/login2/login2.component";
import { SignupComponent } from './auth/signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    // LoginComponent, 
    // Login2Component,
    SignupComponent
  ],
})
export class AppComponent { }
