import { Injectable } from "@angular/core";
import { Menu } from "./menu";

const MENUITEMS: Menu[] = [
    { state: 'persona', name: 'Persona', type: 'link', icon:'person',options:[{
        key: 'op1',
        value: 'Caracteristicas Personas' 
      },{
        key: 'op2',
        value: 'Detalles Personas'
      },{
        key: 'op3',
        value: 'Cantidad de Personas'
      },]},
    { state: 'domicilio', name: 'Domicilio', type: 'link', icon:'directions',options:[{
        key: 'op1',
        value: `opcion 1 - Domicilio`
      },{
        key: 'op2',
        value: 'opcion 2 - Domicilio'
      },{
        key: 'op3',
        value: 'opcion 3 - Domicilio'
      },]},
    { state: 'formasComunicacion', name: 'Formas de Comunicación', type: 'link', icon:'call',options:[{
        key: 'op1',
        value: `opcion 1 Form Com`
      },{
        key: 'op2',
        value: 'opcion 2 -Form Com'
      },{
        key: 'op3',
        value: 'opcion 3 -Form Com'
      },
    // { state: 'localidades', name: 'Localidad', type: 'link', icon:'map'}

]}];

@Injectable()
export class MenuItems {

    getMenuItem(): Menu[] {
        return MENUITEMS;
    }
}
