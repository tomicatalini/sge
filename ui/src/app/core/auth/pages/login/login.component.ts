import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup = this.fb.group(
    {
      user: ['', [Validators.required, Validators.minLength(5)]],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    }
  );

  constructor(
    private fb: FormBuilder
  ) { }

  login() {
    console.log(this.formulario.value);
    console.log(this.formulario.valid);
  }
}
