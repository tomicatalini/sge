import { Injectable } from '@angular/core';

import { Field } from '../model/Field';
import { of } from 'rxjs';
import { TypeOfField } from '../model/TypeOfField';

@Injectable({
  providedIn: 'root'
})
export class FormPermisosService {

  constructor() { }

  getFields(){
    const options: Field[] = [
      {
        entity: '',
        property: 'Usuario',
        type: TypeOfField.TEXT,
        label: 'Nombre de Usuario :',
        value: '',
        required: true,
        readonly: false,
        order: 1,
        group: 'datosUsuario',
        format: [{
          'key': 'required',
          'value': 'true' 
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
        entity: '',
        property: 'Contraseña',
        type: TypeOfField.TEXT,
        label: 'Ingrese Contraseña',
        value: '',
        required: true,
        readonly: false,
        order: 2,
        group: 'datosUsuario',
        format: [
          {
            'key': 'minLength',
            'value': 8
          }
        ],
        options: []
      }
      ,{
        entity: 'Persona',
        property: 'repeat',
        type: TypeOfField.TEXT,
        label: 'Repetir Contraseña:',
        value: '',
        required: true,
        readonly: false,
        order: 3,
        group: 'datosUsuario',
        format: [
          {
            'key': 'minLength',
            'value': 8
          }
        ],
        options: []
      },{
        entity: '',
        property: 'agregar',
        type: TypeOfField.BOTON,
        label: 'Agregar',
        value: '',
        required: false,
        readonly: false,
        order: 1,
        group: 'Acciones_Permisos_Usuari',
        format: [],
        options: []
      }
    ];

    return of( options );
  }
}
