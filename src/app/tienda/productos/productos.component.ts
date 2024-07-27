import { Component, inject } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto.model';
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos : Producto[] = [];
  precioMinimo = '';
  precioMaximo = '';
  precioMin = 0;
  precioMax = 9999999;

  //Forma 2 de invocar un service (Se populariza mucho con los component standalone, es decir version 17 y superiores) 
  $productoService = inject(ProductoService);

  constructor(private productoService : ProductoService){
    //Forma 1 de invocar un service, haciendolo como parametro en nuestro constructor de forma que se inicializa;
  }

  ngOnInit(){
    // this.productos = this.productoService.obtenerProductos();
    // this.productos = this.$productoService.obtenerProductos();
    //this.productos = this.productoService.getProductos(); //Cuando es una observable lo que retorna debemos hacer lo mediante otro metodo, porque este lo rechaza
    this.productoService.getProductos().subscribe({
      next: (data)=> { // Sirve para ejecutar nuestro codigo en caso de ser exitoso
        this.productos = data;
      },
      error: (error) =>{ //Sirve para ejecutar un codigo en caso de que falle la peticion
        alert("Error: "+error.message);
      },
      complete: ()=>{ //Sirve para hacer un codigo se cumpla o no se cumpla la condicion
        //Aqui se desactiva el cargador generalmente
      }
    });
    // this.productoService.getProductos().subscribe( // Viejo metodo y se esta deprecando...
    //   (data)=>{ //Esta primera funcion corresponde a exitoso
    //     this.productos = data;
    //   },
    //   (error)=>{ // Esta segunda funcion corresponde a un fallo

    //   },
    //   ()=>{ //Esta tercera corresponde a codigo que se ejecuta sin importar si falla o no

    //   }
    //);
  }

  filtrar(){
    if(this.precioMinimo && !isNaN(+this.precioMinimo)){
      this.precioMin = +this.precioMinimo;
    }else{
      this.precioMinimo = '';
      this.precioMin = 0;
    }
    if(this.precioMaximo && !isNaN(+this.precioMaximo)){
      this.precioMax = +this.precioMaximo;
    }else{
      this.precioMaximo = '';
      this.precioMax = 9999999;
    }

  }

  borrarProducto(id: number){
    this.productoService.deleteProducto(id).subscribe({
      next:()=>{
        alert('Producto borrado exitosamente!');
      }
    });
  }


}
