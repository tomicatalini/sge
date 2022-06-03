import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

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
}
