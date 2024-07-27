import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { environment } from 'src/environments/environment';
//Nota: los Environment son geniales para hacer actualizaciones generales en nuestro sistema... sio queremos configurarlo solo tenemos que definir la ruta y hace un fileReplacement en angular.json (Ver ejemplo)

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  apiUrl = environment.apiUrl+'products';

  constructor(private http : HttpClient) { }

  getProductos(){
    let nombreHeader = new HttpHeaders({
      'ticketAcceso': 'Mensaje adicional que queramos mandar'
    });

    return this.http.get<Producto[]>(this.apiUrl,{ headers : nombreHeader});
  }
  getProducto(id:number){
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  createProducto(producto: Producto){
    return this.http.post(this.apiUrl,producto);
  } 
  updateProducto(producto: Producto, id:number){
    return this.http.put(`${this.apiUrl}/${id}`,producto);
  } 

  deleteProducto(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }


}
