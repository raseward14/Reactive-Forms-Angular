import { Component } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators
} from '@angular/forms';
import { of } from 'rxjs';

function mustContainQuestionMark(control: AbstractControl) {
    if (control.value.includes('?')) {
        return null;
    }
    return { doesNotContainQuestionMark: true }
}

function emailIsUnique(control: AbstractControl) {
    if (control.value !== 'test@example.com') {
        return of(null);
    }

    return of({ notUnique: true })
}

@Component({
    selector: 'app-login2',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login2.component.html',
    styleUrl: './login2.component.css',
})
export class Login2Component {
    richardsForm = new FormGroup({
        email: new FormControl('', {
            validators: [Validators.email, Validators.required],
            asyncValidators: [emailIsUnique]
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark]
        }),
    });

    get emailIsInvalid() {
        return this.richardsForm.controls.email.touched &&
            this.richardsForm.controls.email.dirty &&
            this.richardsForm.controls.email.invalid
    }
    get passwordIsInvalid() {
        return this.richardsForm.controls.password.touched &&
            this.richardsForm.controls.password.dirty &&
            this.richardsForm.controls.password.invalid
    }

    onSubmit() {
        console.log(this.richardsForm.value.email);
        const enteredEmail = this.richardsForm.value.email;
        const enteredPassword = this.richardsForm.value.password;
        console.log(enteredEmail, enteredPassword);
    }
}