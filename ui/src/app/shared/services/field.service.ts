import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Field } from '../model/Field';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor() { }

  toFormGroup( fields: Field[] ){
    const form: any = {};
    
    // fields.forEach( field => {
    //   form[ field.group ] = field.required ? new FormControl(field.property || '', Validators.required) : new FormControl(field.property || ''); 
    // })

    for(let field of fields ){
      
      const validaciones: any = [];

      if(field.format != null && field.format != []){
      
        for(let i = 0; i < field.format.length; i++) {
          switch (field.format[i].key) {
            case "maxLength":
                validaciones.push( Validators["maxLength"](field.format[i].value)); 
              break;
            case "max":
                validaciones.push( Validators["max"](field.format[i].value)); 
              break;
            case "minLength":
                validaciones.push( Validators["minLength"](field.format[i].value)); 
              break;
            case "min":
                validaciones.push( Validators["min"](field.format[i].value)); 
              break;
            case "email":
                validaciones.push( Validators["email"]); 
              break;
            case "nullValidator":
                validaciones.push( Validators["nullValidator"]); 
              break;
            case "pattern":
                validaciones.push( Validators["pattern"](field.format[i].value)); 
              break;
            case "required":
                validaciones.push( Validators["required"]); 
              break;
            default:
              break;
          }
          
        }

      }      

      Object.defineProperty(form, field.property.toString() , { 
        enumerable: true,
        configurable: false,
        writable: true,
        value: new FormControl( field.value || '', validaciones)
      });
    }

    return new FormGroup( form );
  }
}
