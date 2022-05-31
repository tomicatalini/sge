import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Field } from './shared/model/Field';
import { TypeOfField } from './shared/model/TypeOfField';
import { FormService } from './shared/services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';

  fields$: Observable< Field[] >;
  // valor:string="Sebastian Gomez";
  // tipo:TypeOfField= 0;
  // label:string="";
  // value:string | undefined;
  // type:TypeOfField | undefined;
  // entity:string |undefined;
  // property:string |undefined;
  // required:undefined | boolean; 
  // readonly:undefined | boolean;
  // order?:undefined | number;
  // group?:undefined | string; 
  // format ?: {key: string, value: Object}[] ;
  // options?: {key: string, value: Object}[];
  // minColumnas:any;
  // minFilas:any;
  // checked!:boolean;
  constructor( service: FormService) {
    this.fields$ = service.getFields();
  }
}
