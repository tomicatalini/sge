import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Menu } from '../interfaces/menu';
import { Persona } from '../interfaces/persona';


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
        fechaNacimiento: new Date('23-09-1989'),
        sexo: 'F',
        email: 'juanperez@gmail.com',
        telefono: null,
        movil: 34314431234,
        fax: null,
        tipoDocumento: 'dni',
        documento: 12123212,
        callePrincipal: 'calle sn',
        calleSecundaria: 'calle sn',
        localidad: 'Colon',
        codigoPostal: 3288,
        provincia: 'ER',
        pais: 'ARG',
        titulo: 'UI',
        puesto: 'desarrollador'
      }
    ];

    return of(personas);
  }

  getPersonasButtons(entidad:string,id:number){
    const btns: Menu[] = [];

    // let btn: Menu = {
    //   state: entidad,
    //   name: 'Listar',
    //   type: 'link',
    //   icon: ''
    // }

    let btn2: Menu = {
      state: entidad+'/'+id,
      name: 'Nuevo',
      type: 'link',
      icon: '',
    
    }

    // let btn3: Menu = {
    //   state: entidad+':id',
    //   name: 'Editar',
    //   type: 'link',
    //   icon: ''
    // }

    // btns.push(btn);
    btns.push(btn2);
    // btns.push(btn3);

    return btns;
  }
}