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
        property: 'id',
        type: TypeOfField.NUMBER,
        label: 'id',
        value: '',
        required: false,
        readonly: true,
        order: 1,
        group: '',
        format: [],
        options: []
      }
      ,
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
          'key': 'minLength',
          'value': 5
        }
      ],
        options: []
      }
      // ,
      // {
      //   entity: 'Persona',
      //   property: 'apodo',
      //   type: TypeOfField.TEXT,
      //   label: 'Apodo',
      //   value: '',
      //   required: false,
      //   readonly: false,
      //   order: 1,
      //   group: '',
      //   format: [
      //     {
      //       'key': 'maxLength',
      //       'value': 15
      //     }
      //   ],
      //   options: []
      // }
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
        format: [
          {
            'key': 'required',
            'value': '' 
          }
        ],
        options: []
      },{
        entity: 'Persona',
        property: 'mail',
        type: TypeOfField.EMAIL,
        label: 'Correo Electrónico',
        value: '',
        required: false,
        readonly: false,
        order: 1,
        group: '',
        format: [
          {
            'key': 'required',
            'value': '' 
          },
          {
            'key': 'email',
            'value': ''
          }
        ],
        options: []
      }
      ,
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
        format: [
          {
            'key': 'required',
            'value': '' 
          }
        ],
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
      , 
      {
        entity: 'Persona',
        property: 'sexo',
        type: TypeOfField.RADIO,
        label: 'Sexo',
        value: '',
        required: true,
        readonly: false,
        order: 2,
        group: '',
        format: [],
        options: [{
          key: 'Femenino',
          value: 'F'
        },{
          key: 'Masculino',
          value: 'M'
        },{
          key: 'Otros',
          value: 'O'
        }
      ]
      },
      {
        entity: 'Persona',
        property: 'fecha',
        type: TypeOfField.DATE,
        label: 'Fecha',
        value: '',
        required: true,
        readonly: false,
        order: 2,
        group: '',
        format: [],
        options: []
      }
      ,
      {
        entity: 'Persona',
        property: 'dni',
        type: TypeOfField.NUMBER,
        label: 'DNI',
        value: '',
        required: true,
        readonly: false,
        order: 2,
        group: '',
        format: [
          {
            'key': 'minLength',
            'value': 7
          }
        ],
        options: []
      }

      // ,
      // {
      //   entity: 'Persona',
      //   property: 'sexoCheck',
      //   type: TypeOfField.CHECKBOX,
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
      // ,{
      //   entity: 'Persona',
      //   property: 'float',
      //   type: TypeOfField.FLOAT,
      //   label: 'Flotante',
      //   value: 1.23333333333,
      //   required: false,
      //   readonly: false,
      //   order: 2,
      //   group: '',
      //   decimales:'001',  
      //   format: [
      //   {
      //     'key': 'decimal',
      //     'value': 2
      //   }
        
      // ],
      //   options: []
      // },
      // {
      //   entity: 'Persona',
      //   property: 'monetary',
      //   type: TypeOfField.MONETARY,
      //   label: 'Moneda',
      //   value: '1.54',
      //   required: false,
      //   readonly: false,
      //   order: 2,
      //   group: '',    
      //   format: [
      //   {
      //     'key': 'decimales',
      //     'value': 0.01
      //   }
      // ],
      //   options: []
      // },
      // {
      //   entity: 'Persona',
      //   property: 'boton',
      //   type: TypeOfField.BOTON,
      //   label: 'Boton',
      //   value: 'Hacer Algo',
      //   required: false,
      //   readonly: false,
      //   order: 2,
      //   group: '',    
      //   format: [        
      // ],
      //   options: []
      // }
    ];

    return of( options );
  }
}
