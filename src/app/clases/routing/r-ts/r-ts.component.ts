import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-r-ts',
  templateUrl: './r-ts.component.html',
  styleUrls: ['./r-ts.component.css']
})
export class RTsComponent {
  constructor(private router :Router){}

  cambiarPagina(){
    this.router.navigateByUrl('/clases/routing/r-html');
  }

}
