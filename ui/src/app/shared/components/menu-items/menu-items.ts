import { Injectable } from "@angular/core";
import { Menu } from "./menu";

const MENUITEMS: Menu[] = [
    { state: 'persona', name: 'Persona', type: 'link', icon:'person',options:[{
        key: 'op1',
        value: 'Persona' 
      },{
        key: 'op2',
        value: 'Calle'
      },{
        key: 'op3',
        value: 'Domicilio'
      },]},
    { state: 'expediente', name: 'Expediente', type: 'link', icon:'article',options:[{
        key: 'op1',
        value: 'Archivados'
      },{
        key: 'op2',
        value: 'Pendientes'
      },{
        key: 'op3',
        value: 'Enviados'
      },]}   
];

@Injectable()
export class MenuItems {

    getMenuItem(): Menu[] {
        return MENUITEMS;
    }
}
