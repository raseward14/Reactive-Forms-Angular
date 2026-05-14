import { Component } from '@angular/core';
import {
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
})
export class SignupComponent {
  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit() {
    console.log(this.signupForm.controls)
  }
}
