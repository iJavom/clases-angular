import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-r-html',
  templateUrl: './r-html.component.html',
  styleUrls: ['./r-html.component.css']
})
export class RHtmlComponent {

  variableCapturaParam : string | null = null;

  constructor(private activatedRoute :ActivatedRoute){

  }

  ngOnInit(){
        //Sintaxis para llamar parametros v1

        // this.variableCapturaParam = this.activatedRoute.snapshot.paramMap.get('nombreParam');

        //Sintaxis para llamar parametros v2 (Para estar atentos a los cambios)
        this.activatedRoute.paramMap.subscribe((params)=>{
          this.variableCapturaParam = params.get('nombreParam');
        });

        this.activatedRoute.data.subscribe((data)=>{
          console.log(data);
        });
  }

}
