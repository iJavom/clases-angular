import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'], 
})
export class AppComponent { 

  title = 'clase-angular';
  algunaPropiedad = true;

  saludar(){
    alert("Hola mundo: " + this.title);
  }

}
