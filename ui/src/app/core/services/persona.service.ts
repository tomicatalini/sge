import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/generic.service';
import { Persona } from '../../core/model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService extends GenericService<Persona> {
  private endpoint= this.api + 'autores/';
  
  constructor(
    private httpClient:HttpClient
  ) {
    super(httpClient,'autores/')
   }

   getAll(){
      let personas: any[] = [
        {
          id: 1,
          nombre: 'Tomas',
          apellido: 'Catalini',
          mail: 'tomi@catalini.com',
          nacionalidad: 'argentino',
          sexo: 'M',
          fecha: '11-03-1995',
          dni: 1234567
        }
        ,
        {
          id: 2,
          nombre: 'Sebastian Estaban Emanuel',
          apellido: 'Gomez',
          mail: 'pely@gomez.com',
          nacionalidad: 'argentino',
          sexo: 'M',
          fecha: '24-11-1994',
          dni: 1234567
        }
        ,
        {
          id: 3,
          nombre: 'Matias',
          apellido: 'Ludueña',
          mail: 'mati@ludueña.com',
          nacionalidad: 'argentino',
          sexo: 'M',
          fecha: '27-08-1193',
          dni: 1234567
        }

      ];

      return personas;
   }


  
}