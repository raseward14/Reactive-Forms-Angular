import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators
} from '@angular/forms';
import { debounceTime, of } from 'rxjs';

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

let initialEmailValue = '';
const savedForm = window.localStorage.getItem('saved-login-form');

if (savedForm) {
    const savedObject = JSON.parse(savedForm);
    initialEmailValue = savedObject.email;
}

@Component({
    selector: 'app-login2',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login2.component.html',
    styleUrl: './login2.component.css',
})
export class Login2Component implements OnInit {
    richardsForm = new FormGroup({
        email: new FormControl(initialEmailValue, {
            validators: [Validators.email, Validators.required],
            asyncValidators: [emailIsUnique]
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark]
        }),
    });
    private destroyRef = inject(DestroyRef);

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

    ngOnInit() {
        // const savedForm = window.localStorage.getItem('saved-login-form');

        // if (savedForm) {
        // const savedObject = JSON.parse(savedForm);
        // this.richardsForm.patchValue({
        //     email: savedObject.email
        // })

        // this.richardsForm.controls.email.setValue(savedObject.email);

        // this.richardsForm.setValue({
        //     email: savedObject.email,
        //     password: ''
        // })
        // }

        const subscription = this.richardsForm.valueChanges.pipe(debounceTime(500)).subscribe({
            next: value => {
                window.localStorage.setItem('saved-login-form', JSON.stringify({ email: value.email }))
            }
        });

        this.destroyRef.onDestroy(() => {
            subscription.unsubscribe()
        })

    }

    onSubmit() {
        console.log(this.richardsForm.value.email);
        const enteredEmail = this.richardsForm.value.email;
        const enteredPassword = this.richardsForm.value.password;
        console.log(enteredEmail, enteredPassword);
    }
}