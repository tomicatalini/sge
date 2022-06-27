import { Component, OnInit, Input, ViewEncapsulation, OnDestroy  } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Field } from '../../model/Field';
import { DataService } from '../../services/data.service';
import { FieldService } from '../../services/field.service';
import { FormService } from '../../services/form.service';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'generic-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit, OnDestroy {

  @Input() service: GenericService<any>;
  @Input() entity: string;
  @Input() fields!: Field[] | null;
  @Input() data!: any;
  @Input() presentacion: any = {};
  
  formGroup: FormGroup;

  private sub: any;

  constructor( 
    private fieldService: FieldService,
    private formService: FormService,
    private route: ActivatedRoute,
    private dataService: DataService
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
      console.log("formulario pre router");
      this.sub = this.route.params.subscribe({
        next: (res) => {
          this.data = this.getData(res);
          console.log(res);
          console.log(this.getData(res));
        },
        error: (e) => { 
          console.warn('Error al obtener datos para el formulario');
          console.log(e)
        },
        complete: () => console.info('complete')
      });
      console.log("formulario post router");
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

  getData(_id: any){
    // this.service.findById();
    let persona;

    this.dataService.getPersonas().subscribe({
      next: (res) => {
        persona = res.find( persona => persona['id'] == _id.id);
      },
      error: (error) => { console.error(error)},
      complete: () => console.info('Complete')
    }
    );

    return persona;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
