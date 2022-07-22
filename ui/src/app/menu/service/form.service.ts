import { Injectable } from '@angular/core';


import { of } from 'rxjs';
import { Field } from '../interfaces/field';
import { TypeOfField } from '../interfaces/typeOfField';

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
        label: 'Id',
        value: '123',
        readonly: true,
        order: 1,
        group: '',
        format: [
          {
            validation: {},
            render: {float: 'expand'}
          }
        ],
        options: []
      }
      ,
      {
        entity: 'Persona',
        property: 'nombre',
        type: TypeOfField.TEXT,
        label: 'Nombre',
        value: 'Pepiteishon',
        readonly: true,
        order: 2,
        group: 'principal',
        format: [
          {
            validation: {required: true,
              minLength: 2 
            },
            render: {float: 'fill'}
          }
      ],
        options: []
      }
      ,   {
        entity: 'Persona',
        property: 'password',
        type: TypeOfField.PASSWORD,
        label: 'Contraseña',
        value: '',
        readonly: false,
        order: 2,
        group: 'principal',
        format: [
          {
            validation: {required: true,
              minLength: 2 
            },
            render: {float: 'fill'}
          }
      ],
        options: []
      },
      {
        entity: 'Persona',
        property: 'apellido',
        type: TypeOfField.TEXT,
        label: 'Apellido',
        value: '',
        readonly: false,
        order: 3,
        group: 'principal',
        format: [
          {
            validation: {required: true,
              minLength: 2 
            },
            render: {float: 'fill'}
          }
        ],
        options: []
      }
      ,
      {
        entity: 'Persona',
        property: 'fechaNacimiento',
        type: TypeOfField.DATE,
        label: 'Fecha de Nacimiento',
        value: 'principal',
        readonly: false,
        order: 4,
        group: '',
        format: [
          {
            validation: {required: true},
            render: {float: 'expand'}
          }
        ],
        options: []
      }
      ,
      {
        entity: 'Persona',
        property: 'sexo',
        type: TypeOfField.RADIO,
        label: 'Sexo',
        value: 'principal',
        readonly: false,
        order: 5,
        group: '',
        format: [
          {
            validation: {required: true},
            render: {float: 'expand'}
          }
        ],
        options: [
          {
            key: 'Femenino',
            value: 'F'
          },{
            key: 'Masculino',
            value: 'M'
          },{
            key: 'No binario',
            value: 'B'
          },
          {
            key: 'Otro',
            value: 'O'
          }
        ]
      }
      , 
      {
        entity: 'Persona',
        property: 'email',
        type: TypeOfField.EMAIL,
        label: 'Correo Electrónico',
        value: '',
        readonly: false,
        order: 6,
        group: 'comunicacion',
        format: [
          {
            validation: {
              required: true,
              email: true
            },
            render: {float: 'expand'}
          }
        ],
        options: []
      }
      ,
      {
        entity: 'Persona',
        property: 'telefono',
        type: TypeOfField.TEL,
        label: 'Telefono',
        value: '',
        readonly: false,
        order: 7,
        group: 'comunicacion',
        format: [
          {
            validation: {
              minLength: 6
            },
            render: {float: 'expand'}
          }
        ],
        options: []
      }
      ,
      {
        entity: 'Persona',
        property: 'movil',
        type: TypeOfField.TEL,
        label: 'Telefono Movil',
        value: '',
        readonly: false,
        order: 8,
        group: 'comunicacion',
        format: [
          {
            validation: {
              minLength: 6
              ,
              pattern: '([0-9]{6})*$'
            },
            render: {float: 'expand'}
          }
        ],
        options: []
      }
      ,
      {
        entity: 'Persona',
        property: 'fax',
        type: TypeOfField.TEL,
        label: 'Fax',
        value: '',
        readonly: false,
        order: 9,
        group: 'comunicacion',
        format: [
          {
            validation: {
              minLength: 6
              // ,
              // pattern: "/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/"
            },
            render: {float: 'expand'}
          }
        ],
        options: []
      }
      ,
      {
        entity: 'Persona',
        property: 'tipoDocumento',
        type: TypeOfField.SELECT,
        label: 'Tipo de Documento',
        value: '',
        readonly: false,
        order: 10,
        group: 'documento',
        format: [
          {
            validation: {
              required: true
              // ,
              // pattern: "/^\+?([0-9]{2})\)?[-]?([0-9]{8})[-]?([0-9]{1})$/"
            },
            render: {float: 'fill'}
          }
        ],
        options: [
          {
            key: 'DNI',
            value: 'dni'
          }
          ,
          {
            key: 'CUIL',
            value: 'cuil'
          }
        ]
      }
      ,
      {
        entity: 'Persona',
        property: 'documento',
        type: TypeOfField.NUMBER,
        label: 'Documento',
        value: '',
        readonly: false,
        order: 11,
        group: 'documento',
        format: [
          {
            validation: {
              required: true,
              minLength: 8
            },
            render: {float: 'fill'}
          }
        ],
        options: []
      }
      ,
      {
        entity: 'Persona',
        property: 'callePrincipal',
        type: TypeOfField.TEXT,
        label: 'Calle',
        value: '',
        readonly: false,
        order: 12,
        group: 'ubicacion',
        format: [
          {
            validation: {
              required: true,
              minLength: 8
            },
            render: {float: 'fill'},
            hint: 'Lorenzo Sartorio 232'
          }
        ],
        options: []
      }
      ,
      {
        entity: 'Persona',
        property: 'calleSecundaria',
        type: TypeOfField.TEXT,
        label: 'Calle Alternativa',
        value: '',
        readonly: false,
        order: 13,
        group: 'ubicacion',
        format: [
          {
            validation: {},
            render: {float: 'fill'},
            hint: 'Lorenzo Sartorio 232'
          }
        ],
        options: []
      }
      ,
      {
        entity: 'Persona',
        property: 'localidad',
        type: TypeOfField.TEXT,
        label: 'Localidad',
        value: '',
        readonly: false,
        order: 14,
        group: 'ubicacion',
        format: [
          {
            validation: {
              required: true,
              minLength: 2
            },
            render: {float: 'fill'}
          }
        ],
        options: []
      }
      ,
      {
        entity: 'Persona',
        property: 'codigoPostal',
        type: TypeOfField.NUMBER,
        label: 'Código Postal',
        value: '',
        readonly: false,
        order: 15,
        group: 'ubicacion',
        format: [
          {
            validation: {
              required: true,
              minLength: 4
            },
            render: {float: 'fill'},
            hint: '3260'
          }
        ],
        options: []
      }
      ,
      {
        entity: 'Persona',
        property: 'provincia',
        type: TypeOfField.SELECT,
        label: 'Provincia',
        value: '',
        readonly: false,
        order: 16,
        group: 'ubicacion',
        format: [
          {
            validation: {
              required: true
            },
            render: {float: 'fill'}
          }
        ],
        options: [
          {
            key: 'Entre Rios',
            value: 'ER'
          },
          {
            key: 'Buenos Aires',
            value: 'CABA'
          }

        ]
      }
      ,
      {
        entity: 'Persona',
        property: 'pais',
        type: TypeOfField.SELECT,
        label: 'Pais',
        value: '',
        readonly: false,
        order: 17,
        group: 'ubicacion',
        format: [
          {
            validation: {
              required: true
            },
            render: {float: 'fill'}
          }
        ],
        options: [
          {
            key: 'Argentina',
            value: 'ARG'
          },
          {
            key: 'Uruguay',
            value: 'ROU'
          },
          {
            key: 'Brasil',
            value: 'BRZ'
          }
        ]
      }
      ,
      {
        entity: 'Persona',
        property: 'titulo',
        type: TypeOfField.SELECT,
        label: 'Titulo',
        value: '',
        readonly: false,
        order: 18,
        group: 'otros',
        format: [
          {
            validation: {
              required: true
            },
            render: {float: 'expand'}
          }
        ],
        options: [
          {
            key: 'Primario Completo',
            value: 'P'
          }
          ,
          {
            key: 'Secundario Incompleto',
            value: 'SI'
          }
          ,
          {
            key: 'Secundario Completo',
            value: 'S'
          }
          ,          
          {
            key: 'Universitario Incompleto',
            value: 'UI'
          }
          ,          
          {
            key: 'Universitario Completo',
            value: 'U'
          }
        ]
      }
      ,
      {
        entity: 'Persona',
        property: 'puesto',
        type: TypeOfField.TEXT,
        label: 'Puestro de Trabajo',
        value: '',
        readonly: false,
        order: 19,
        group: 'otros',
        format: [
          {
            validation: {
              required: true,
              minLength: 4
            },
            render: {float: 'expand'}
          }
        ],
        options: []
      }
      // ,
      // {
      //   entity: 'Persona',
      //   property: 'boton',
      //   type: TypeOfField.BOTON,
      //   label: 'BASIC',
      //   value: '',
      //   readonly: false,
      //   order: 19,
      //   typeButton:1,
      //   group: 'otros',
      //   format: [
      //     {
            
      //       render: {float: 'expand'}
      //     }
      //   ],
      //   options: []
      // },
      // {
      //   entity: 'Persona',
      //   property: 'boton',
      //   type: TypeOfField.BOTON,
      //   label: 'SAVE',
      //   value: '',
      //   readonly: false,
      //   order: 19,
      //   typeButton:2,
      //   group: 'otros',
      //   format: [
      //     {
      //       validation: {
      //         required: true,
      //         minLength: 4
      //       },
      //       render: {float: 'expand'}
      //     }
      //   ],
      //   options: []
      // },
      // {
      //   entity: 'Persona',
      //   property: 'boton',
      //   type: TypeOfField.BOTON,
      //   label: 'ENFASIS',
      //   value: '',
      //   readonly: false,
      //   order: 19,
      //   typeButton:3,
      //   group: 'otros',
      //   format: [
      //     {
      //       validation: {
      //         required: true,
      //         minLength: 4
      //       },
      //       render: {float: 'expand'}
      //     }
      //   ],
      //   options: []
      // },
      // {
      //   entity: 'Persona',
      //   property: 'boton',
      //   type: TypeOfField.BOTON,
      //   label: 'WARNING',
      //   value: '',
      //   readonly: false,
      //   order: 19,
      //   typeButton:4,
      //   group: 'otros',
      //   format: [
      //     {
      //       validation: {
      //         required: true,
      //         minLength: 4
      //       },
      //       render: {float: 'expand'}
      //     }
      //   ],
      //   options: []
      // },
      // {
      //   entity: 'Persona',
      //   property: 'boton',
      //   type: TypeOfField.BOTON,
      //   label: 'DISABLED',
      //   value: '',
      //   readonly: false,
      //   order: 19,
      //   typeButton:1,
      //   group: 'otros',
      //   format: [
      //     {
      //       validation: {
      //         required: true,
      //         minLength: 5
      //       },
      //       render: {float: 'expand'}
      //     }
      //   ],
      //   options: []
      // },
      // {
      //   entity: 'Persona',
      //   property: 'boton',
      //   type: TypeOfField.BOTON,
      //   label: 'Link',
      //   value: '',
      //   readonly: false,
      //   order: 19,
      //   typeButton:1,
      //   group: 'otros',
      //   format: [
      //     {
      //       validation: {
      //         required: true,
      //         minLength: 6
      //       },
      //       render: {float: 'expand'}
      //     }
      //   ],
      //   options: []
      // }
          
    ];

    return of( options );
  }
}