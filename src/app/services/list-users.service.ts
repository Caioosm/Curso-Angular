import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IUsuario } from '../models/iusuario';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  constructor(private http: HttpClient) { }

  apiURL = 'https://reqres.in/api/';

  listarUsuarios(): Observable<IUsuario[]> {
    const headers = new HttpHeaders({
      'x-api-key': 'reqres-free-v1',
    })
    return this.http.get<{data: IUsuario[]}>(this.apiURL + 'users?page2', { headers })
        .pipe(map( (response) => response.data));
  }
}
