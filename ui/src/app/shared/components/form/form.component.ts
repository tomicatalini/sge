import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../model/Field';
import { FieldService } from '../../services/field.service';
import { FormService } from '../../services/form.service';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'generic-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() service: GenericService<any>;
  @Input() entity: string;
  @Input() fields!: Field[] | null;
  @Input() data!: any;
  
  formGroup: FormGroup;

  constructor( 
    private fieldService: FieldService,
    private formService: FormService
    ) {}

  ngOnInit(): void {

    //Get data
    if( !this.fields ){
      this.formService.getFields().subscribe({ 
          next: (res) => {
            this.fields = res;
            console.log(res)
          },
          error: (e) => { 
            console.warn('Error al obtener datos para el formulario');
            console.log(e)
          },
          complete: () => console.info('complete')
      });
    }

    //Transform feilds to FormGroup
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
