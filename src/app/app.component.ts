import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
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
