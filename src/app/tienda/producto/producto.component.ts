import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  id:number = 0;
  producto = {
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  };

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = +(params.get('id')??0);
      if(this.id){
        this.productoService.getProducto(this.id).subscribe({
          next: (data)=>{
            this.producto = data;
          }
        });
      }
    });
  }

  guardarProducto() {
    if(this.id){
      this.productoService.updateProducto(this.producto, this.id).subscribe({
        next: () => {
          alert('Su producto fue actualizado exitosamente');
          this.router.navigateByUrl('/tienda/productos')
        },
        error: () => {
          alert('Fallo el guardado');
        }
      });
    }else{
      this.productoService.createProducto(this.producto).subscribe({
        next: () => {
          alert('Su producto fue guardado exitosamente');
          this.router.navigateByUrl('/tienda/productos')
        },
        error: () => {
          alert('Fallo el guardado');
        }
      });
    }

  }
}
