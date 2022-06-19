import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { GenericService } from 'src/app/shared/services/generic.service';
import { Persona } from '../../core/model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService extends GenericService<Persona> {
  private endpoint= this.api + 'autores/';
  
  constructor(
    private httpClient:HttpClient,
    private dataService: DataService
  ) {
    super(httpClient,'autores/')
   }

  override findAll(){
    return this.dataService.getPersonas();
  }
  
}