import { Injectable } from '@angular/core';

import { Field } from '../model/Field';
import { of } from 'rxjs';
import { TypeOfField } from '../model/TypeOfField';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  getFields(){
    const options: Field[] = [
      {
        entity: 'Persona',
        property: 'nombre',
        type: TypeOfField.TEXT,
        label: 'Nombre',
        value: '',
        required: true,
        readonly: false,
        order: 1,
        group: '',
        format: [{
          'key': 'required',
          'value': '' 
        },
        {
          'key': 'maxLength',
          'value': 25
        },
        {
          'key': 'minLength',
          'value': 5
        }
      ],
        options: []
      }
      ,
      {
        entity: 'Persona',
        property: 'apodo',
        type: TypeOfField.TEXT,
        label: 'Apodo',
        value: '',
        required: false,
        readonly: false,
        order: 1,
        group: '',
        format: [],
        options: []
      }
      ,{
        entity: 'Persona',
        property: 'apellido',
        type: TypeOfField.TEXT,
        label: 'Apellido',
        value: '',
        required: true,
        readonly: false,
        order: 1,
        group: '',
        format: [],
        options: []
      },{
        entity: 'Persona',
        property: 'mail',
        type: TypeOfField.TEXT,
        label: 'Correo Electrónico',
        value: '',
        required: false,
        readonly: false,
        order: 1,
        group: '',
        format: [],
        options: []
      },
      {
        entity: 'Persona',
        property: 'nacionalidad',
        type: TypeOfField.SELECT,
        label: 'Nacionalidad',
        value: '',
        required: true,
        readonly: false,
        order: 3,
        group: '',
        format: [],
        options: [{
            key: 'Argentina',
            value: 'argentino'
          },{
            key: 'Uruguay',
            value: 'uruguayo'
          },{
            key: 'Brasil',
            value: 'brasilero'
          }
        ]
      }
      // , 
      // {
      //   entity: 'Persona',
      //   property: 'sexo',
      //   type: TypeOfField.RADIO,
      //   label: 'Sexo',
      //   value: '',
      //   required: true,
      //   readonly: false,
      //   order: 2,
      //   group: '',
      //   format: [],
      //   options: [{
      //     key: 'Femenino',
      //     value: 'F'
      //   },{
      //     key: 'Masculino',
      //     value: 'M'
      //   },{
      //     key: 'Otros',
      //     value: 'O'
      //   }
      // ]
      // }
    ];

    return of( options );
  }
}
