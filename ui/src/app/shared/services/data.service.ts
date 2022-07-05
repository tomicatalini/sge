import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Persona } from '../../core/model/persona';
import { Menu } from '../components/menu-items/menu';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPersonas(){
    const personas: Persona[] = [
      {
        id: 0,
        nombre: 'Juan',
        apellido: 'Perez',
        fechaNacimiento: new Date('1989/11/12'),
        sexo: 'F',
        email: 'juanperez@gmail.com',
        telefono: null,
        movil: 34314431234,
        fax: null,
        tipoDocumento: 'dni',
        documento: 12123212,
        callePrincipal: 'calle publica sin numero',
        calleSecundaria: 'calle publica sin numero',
        localidad: 'Colon',
        codigoPostal: 3288,
        provincia: 'ER',
        pais: 'ARG',
        titulo: 'UI',
        puesto: 'desarrollador'
      }
      ,
      {
        id: 1,
        nombre: 'Michi',
        apellido: 'Fechter',
        fechaNacimiento: new Date('2000/01/12'),
        sexo: 'F',
        email: 'lamichibienpeola@gmail.com',
        telefono: null,
        movil: 315676874987,
        fax: null,
        tipoDocumento: 'dni',
        documento: 97569320,
        callePrincipal: 'calle publica sin numero',
        calleSecundaria: 'calle publica sin numero',
        localidad: 'Paysa',
        codigoPostal: 60000,
        provincia: 'Paysa',
        pais: 'URU',
        titulo: 'UI',
        puesto: 'RRHH'
      }
    ];

    return of(personas);
  }

  getPersonasButtons(){
    const btns: any[] = [];

    let btn: any = {
      state: 'personas',
      params: '',
      name: 'Lista',
      type: 'link',
      icon: ''
    }

    let btn2: any = {
      state: 'personas',
      params: ':id',
      name: 'Nuevo',
      type: 'link',
      icon: ''
    }

    btns.push(btn);
    btns.push(btn2);

    return btns;
  }

  getCustomGrids(style: any){
    let grids: any[] = [
      {
        small: { 'grid-template-areas': '"id id . ." "nom ape . ." "nac nac . ." "sexo sexo . ." "mail mail . ." "movil movil . ." "fax . . ." "tel tel . ." "tipo doc . ." "calle . calle2 ." "loc postal . ." "prov pais . ." "titulo puesto . ." "btn . . ."'},
        medium: {'grid-template-areas':'"id id id ." "nom ape ape ." "nac nac . ." "sexo sexo sexo ." "mail mail . ." "movil movil . ." "fax . . ." "tel tel tel ." "tipo doc . ." "calle calle calle2 ." "loc . postal ." "prov pais . ." "titulo puesto . ." "btn btn . ."'},
        large: {'grid-template-areas':'"id id id id" "nom nom ape ape" "nac nac . ." "sexo sexo sexo sexo" "mail mail mail ." "tel tel tel ." "movil movil movil ." "fax fax fax ." "tipo doc doc ." "calle calle calle2 calle2" "loc loc postal ." "prov pais . ." "titulo puesto puesto ." "btn btn btn btn"'}
      }
    ];
    return grids[0][style];
  }
}
