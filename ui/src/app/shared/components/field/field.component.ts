import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../model/Field';
import { TypeOfField } from '../../model/TypeOfField';


@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() field!: Field;
  @Input() form!: FormGroup;
  
  clicked = false;
  valor:number;
  constructor() { }

 

  ngOnInit(): void { 

  }    
  
  get isValid() {   
    return this.form.controls[this.field.property].valid; 
  
  }

}
