import { Injectable } from "@angular/core";
import { Menu } from "../interfaces/menu";


const MENUITEMS: Menu[] = [
    { state: 'personas', name: 'Personas', type: 'link', icon:'person',options:[{
        key: 'op1',
        value: 'Usuarios' 
      },{
        key: 'op2',
        value: 'Grupos'
      },{
        key: 'op3',
        value: 'Accesos'
      },
      {
        key: 'op4',
        value: 'Reglas'
      },
      {
        key: 'op5',
        value: 'Areas'
      },]},
    { state: 'expedientes', name: 'Expedientes', type: 'link', icon:'article',options:[{
        key: 'op1',
        value: 'Expedientes'
      },{
        key: 'op2',
        value: 'En Borrador'
      },{
        key: 'op3',
        value: 'Documentos'
      },
      {
        key: 'op4',
        value: 'Historial'
      },
      {
        key: 'op5',
        value: 'Tipos de expedientes'
      },
      {
        key: 'op6',
        value: 'Estados'
      },],
    },
    { state: 'configuracion', name: 'Configuracion', type: 'link', icon:'settings',options:[{
      key: 'op1',
      value: 'Usuarios'
    },{
      key: 'op2',
      value: 'Grupos'
    },{
      key: 'op3',
      value: 'Accesos'
    },
    {
      key: 'op4',
      value: 'Reglas'
    },
    {
      key: 'op5',
      value: 'Areas'
    },
    ],
  }   
];

@Injectable()
export class MenuItems {

    getMenuItem(): Menu[] {
        return MENUITEMS;
    }
}