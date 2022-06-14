import { Injectable } from "@angular/core";
import { Menu } from "./menu";

const MENUITEMS: Menu[] = [
    { state: 'personas', name: 'Persona', type: 'link', icon:''}
];

@Injectable()
export class MenuItems {

    getMenuItem(): Menu[] {
        return MENUITEMS;
    }
}
