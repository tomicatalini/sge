import { Injectable } from '@angular/core';
import { Menu } from './menu';

const MENUITEMS: Menu[] =[
    {state:'persona',name:'Persona', type:'link', icon:'account_circle'},
    {state:'domicilios',name:'Domicilios', type:'link', icon:'home'},
    {state:'localidades',name:'Localidades', type:'link', icon:'map'},
];

@Injectable()
export class MenuItems {

    getMenuitem():Menu[]{
        return MENUITEMS;
    }
}
