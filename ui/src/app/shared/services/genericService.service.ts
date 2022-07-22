import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
//import Swal from 'sweetalert2';

// const Toast = Swal.mixin({
 //  toast: true,
 //  position: "top",
 //  showConfirmButton: false,
 //  timer: 3000
// });

@Injectable({
  providedIn: 'root'
})
export abstract class GenericServiceService<T> {

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
// save(request: T):Observable<any>{
 //  if (request) {
   //  const path = `${this.api}${this.endPoint}`;
  //   return this.http.post<any>(path, request, { headers: this.httpClientHeaders })
   //    .pipe(
   //      catchError(e => {
   //        Toast.fire({
  //           icon: 'error',
  //           title: e.error.mensaje
  //         });
  //         return throwError(() => e);
 //        })
  //     );
 //  }
 //  throw new Error(`Id NotFound`)
// }
 }
