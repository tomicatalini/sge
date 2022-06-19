import { Injectable } from '@angular/core';

import { Persona } from '../../core/model/persona';

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
        callePrincipal: 'calle publica sin numero',
        calleSecundaria: 'calle publica sin numero',
        localidad: 'Colon',
        codigoPostal: 3288,
        provincia: 'ER',
        pais: 'ARG',
        titulo: 'UI',
        puesto: 'desarrollador'
      }
    ];

    return personas;
  }
}
