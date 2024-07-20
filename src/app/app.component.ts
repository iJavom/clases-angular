import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'], 
})
export class AppComponent { 

  title = 'clase-angular';
  algunaPropiedad = true;

  constructor(){
    setTimeout(() => {
      this.title = "jejeje";
    }, 5000);
  }

  saludar(){
    alert("Hola mundo: " + this.title);
  }

}
