import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from 'src/app/shared/model/persona';
import { GenericService } from 'src/app/shared/services/generic.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService extends GenericService<Persona>{
  private endpoint= this.api + 'personas/';
  constructor(
    private httpClient:HttpClient
  ) {
    super(httpClient,'personas/')
   }
}
