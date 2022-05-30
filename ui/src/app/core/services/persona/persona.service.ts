import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic.service';
import { Persona } from '../../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService extends GenericService<Persona> {
  private endpoint= this.api + 'personas/';
  constructor(
    private httpClient:HttpClient
  ) {
    super(httpClient,'autores/')
   }
}
