import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  complete = false;
  strongPassword = false;

  signupForm = new FormGroup({
    password: new FormControl(null, [
      Validators.minLength(8),
      Validators.required,
    ]),
  });

  get f() {
    return this.signupForm.controls;
  }

  onPasswordStrengthChanged(event: boolean) {
    this.strongPassword = event;
  }

}
