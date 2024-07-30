import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  apiUrl = environment.apiUrl+'products/categories';

  constructor(private http : HttpClient) { }

  getCategorias(){
    return this.http.get<string[]>(this.apiUrl);
  }


}
