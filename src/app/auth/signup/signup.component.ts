import { Component } from '@angular/core';
import {
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
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
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
    }),
  });

  onReset() {
    this.signupForm.reset();
    // this.signupForm.setValue({
    //   email: '',
    //   password: ''
    // });
  };

  onSubmit() {
    console.log(this.signupForm);
  };
}
