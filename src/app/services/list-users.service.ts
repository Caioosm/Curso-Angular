import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from '../models/iusuario';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  constructor(private http: HttpClient) { }

  apiURL = 'https://reqres.in/api/';

  listarUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(this.apiURL + 'users?page2');
  }
}
