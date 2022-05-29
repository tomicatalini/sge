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

  createControls(){} 

  onSubmit(){

    if(this.anyErrors()){
      this.result = 'Hay errores rey';
    } else {
      this.result = JSON.stringify( this.profileForm.getRawValue() );
    }
    return false;
  }

  anyErrors(){
    let error: boolean = false;

    if(this.profileForm.hasError('required')) {
      error = true;
    } else if (this.profileForm.hasError('maxLength')){
      error = true;
    } else if (this.profileForm.hasError('minLength')){
      error = true;
    }

    return error;    
  }

}
