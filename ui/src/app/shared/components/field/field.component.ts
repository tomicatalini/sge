import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../../model/Field';
import { TypeOfField} from '../../model/TypeOfField';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
 
  @Input() field!: Field;
  @Input() form!: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes completar este campo';
    }

    return this.email.hasError('email') ? 'El mail ingresado no es valido' : '';
  }

  constructor() { }

  ngOnInit(): void {  
   this.form.controls[ this.field.property ].valid;
   this.getErrorMessage();
  }

  get isValid() {
    return this.form.controls[ this.field.property ].valid;
  }

}
