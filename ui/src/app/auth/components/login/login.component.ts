import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup = this.fb.group(
    {
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    }
  );

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  login() {
    console.log(this.formulario.value);
    // console.log(this.formulario.valid);
    const {username, password} = this.formulario.value;

    this.authService.login( username, password )
      .subscribe( resp => {
        console.log(resp);
      });
  }

}
