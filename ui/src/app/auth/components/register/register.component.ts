import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formulario: FormGroup = this.fb.group(
    {
      user: ['', [Validators.required, Validators.minLength(5)]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      pass2: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      email2: ['', [Validators.required, Validators.email]]
    }
  );

  constructor(
    private fb: FormBuilder
  ) { }
  
  register(){
    console.log( this.formulario.value );
    console.log( this.formulario.valid );
  }

}
