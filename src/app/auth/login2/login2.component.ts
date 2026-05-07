import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login2',
    standalone: true,
    templateUrl: './login2.component.html',
    styleUrl: './login2.component.css',
})
export class Login2Component {
    richardsForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });

    onSubmit() {
        this.richardsForm.value.email;
    }
}