import { Component } from '@angular/core';
import {
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

type role = 'student' | 'teacher' | 'employee' | 'founder' | 'other';


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
    confirmPassword: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
    }),
    firstName: new FormControl('', { validators: [Validators.required] }),
    lastName: new FormControl('', { validators: [Validators.required] }),
    street: new FormControl('', { validators: [Validators.required] }),
    number: new FormControl('', { validators: [Validators.required] }),
    postalCode: new FormControl('', { validators: [Validators.required] }),
    city: new FormControl('', { validators: [Validators.required] }),
    role: new FormControl<role>('student', { validators: [Validators.required] }),
    agree: new FormControl(false, { validators: [Validators.required] })
  });

  // onReset() {
  //   this.signupForm.reset();
  // };

  onSubmit() {
    console.log(this.signupForm);
  };
}
