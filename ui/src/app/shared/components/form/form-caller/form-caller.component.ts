import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Field } from 'src/app/shared/model/Field';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-form-caller',
  templateUrl: './form-caller.component.html',
  styleUrls: ['./form-caller.component.css']
})
export class FormCallerComponent {

  fields$: Observable< Field[] >;

  constructor( service: FormService) {
    this.fields$ = service.getFields();
  }

}
