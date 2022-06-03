import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../model/Field';
import { FieldService } from '../../services/field.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() entity: string;
  @Input() fields: Field[] | null = [];
  profileForm!: FormGroup;
  result = '';
  
  constructor( private fieldService: FieldService) {}

  ngOnInit(): void {
    this.profileForm = this.fieldService.toFormGroup( this.fields as Field[] );
  } 

  onSubmit(){
    if(this.profileForm.invalid){
      this.result = 'Hay errores rey';
    } else {
      this.result = JSON.stringify( this.profileForm.getRawValue() );
    }
  }

}
