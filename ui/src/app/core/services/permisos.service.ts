import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/generic.service';
import { Permiso } from '../model/permiso';

@Injectable({
  providedIn: 'root'
})
export class PermisoService extends GenericService<Permiso>{

  constructor(
    private httpClient:HttpClient
  ) {
    super(httpClient,'permisos/')
   }
}
