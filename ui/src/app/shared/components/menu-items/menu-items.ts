import { Injectable } from "@angular/core";
import { Menu } from "./menu";

const MENUITEMS: Menu[] = [
    { state: 'personas', name: 'Persona', type: 'link', icon:'account_circle'},
    { state: 'domicilios', name: 'Domicilio', type: 'link', icon:'directions'},
    { state: 'formasComunicacion', name: 'Formas de Comunicación', type: 'link', icon:'call'},
    { state: 'localidades', name: 'Localidad', type: 'link', icon:'map'}

];

@Injectable()
export class MenuItems {

    getMenuItem(): Menu[] {
        return MENUITEMS;
    }
}
