import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000
});
@Injectable({
  providedIn: 'root'
})
export abstract class GenericService<T> {
  public api = environment.API_URL;
  private httpClientHeaders = new HttpHeaders({ 'Context-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    @Inject(String) private endPoint: string
  ) { }

  findAll(): Observable<T | T[]> {
    const path = `${this.api}${this.endPoint}`;
    return this.http.get(path)
      .pipe(
        map((response: any) => response.data as T)
      );
  }
  //Servicio PROVISORIO PARA PERMISOS
  findAll_permisos(): Observable<any> {
    const datosDePrueba = [
      {
      id:1,
      nombre: "Matias",
      usuario: "luduenama",
      ultimaConexion: "12/2/21"
      },
      {
        id:2,
        nombre: "Pedro",
        usuario: "perezpe",
        ultimaConexion: "12/3/21"
        }
    ];
    return new Observable( (observer) => { observer.next(datosDePrueba)});
  }
  //
  save(request: T):Observable<any>{
    if (request) {
      const path = `${this.api}${this.endPoint}`;
      return this.http.post<any>(path, request, { headers: this.httpClientHeaders })
        .pipe(
          catchError(e => {
            Toast.fire({
              icon: 'error',
              title: e.error.mensaje
            });
            return throwError(() => e);
          })
        );
    }
    throw new Error(`Id NotFound`)
  }
}
