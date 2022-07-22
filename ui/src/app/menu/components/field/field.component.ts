import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../interfaces/field';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() field!: Field;
  @Input() form!: FormGroup;
  
  clicked = true;
  valor:number;
  constructor() { }

 

  ngOnInit(): void { 

  }    
  
  get isValid() {   
    return this.form.controls[this.field.property].valid; 
  
  }

}
