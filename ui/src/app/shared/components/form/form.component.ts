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

  @Input() entity!: string;
  @Input() fields!: Field[] | null;
  @Input() data!: any;
  
  formGroup: FormGroup;

  constructor( 
    private fieldService: FieldService
    ) {}

  ngOnInit(): void {

    //Get form fields
    this.formGroup = this.fieldService.toFormGroup( this.fields as Field[] );
    
    if(this.data){
      for(let property in this.data){
        this.formGroup.get(`${property}`)?.setValue( this.data[property] );
      }
    }

  } 

  onSubmit(){
    if(this.formGroup.invalid){
      console.error("Formulario Inválido. Faltan campos o algún campo fue ingresado incorrectamente.");
    } else {
      console.log( JSON.stringify( this.formGroup.getRawValue() ) );
    }
  }

}
