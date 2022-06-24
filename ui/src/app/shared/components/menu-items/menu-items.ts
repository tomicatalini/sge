import { Injectable } from "@angular/core";
import { Menu } from "./menu";

const MENUITEMS: Menu[] = [
    { state: 'personas', name: 'Persona', type: 'link', icon:'person',options:[{
        key: 'op1',
        value: 'opcion 1 -Domicilio'
      },{
        key: 'op2',
        value: 'opcion 2'
      },{
        key: 'op3',
        value: 'opcion 3'
      },]},
    { state: 'domicilios', name: 'Domicilio', type: 'link', icon:'directions',options:[{
        key: 'op1',
        value: `opcion 1 -${name}`
      },{
        key: 'op2',
        value: 'opcion 2'
      },{
        key: 'op3',
        value: 'opcion 3'
      },]},
    { state: 'formasComunicacion', name: 'Formas de Comunicación', type: 'link', icon:'call'},
    // { state: 'localidades', name: 'Localidad', type: 'link', icon:'map'}

];

@Injectable()
export class MenuItems {

    getMenuItem(): Menu[] {
        return MENUITEMS;
    }
}
