import { Injectable, Type } from '@angular/core';
import { Field } from 'src/app/shared/model/Field';
import { TypeOfField } from 'src/app/shared/model/TypeOfField';
import { FieldService } from 'src/app/shared/services/field.service';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor() { }

  getFormStructure(): Field[]{
    const fields: Field[] = [
      {
        entity: 'User',
        property: 'user',
        type: TypeOfField.TEXT,
        label: 'Usuario',
        value: '',
        readonly: false,
        order: 1,
        group: '',
        format: [
          {
            validation: {
              required: true,
              minLength: 5
            }
          }
        ]
      }
      ,
      {
        entity: 'User',
        property: 'pass',
        type: TypeOfField.TEXT,
        label: 'Contraseña',
        value: '',
        readonly: false,
        order: 2,
        group: '',
        format: [
          {
            validation: {
              required: true,
              minLength: 5
            }
          }
        ]
      }
    ];
    return fields;
  }
}
