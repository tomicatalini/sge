import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login( username: string, password: string){
    
    const url = 'http://localhost:8080/oauth/token';
    const body = {
      username,
      password,
      "grant_type": password
    }

    return this.http.post<AuthResponse>(url, body);
  }
}
