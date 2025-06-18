import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  imports: [],
  template: `
  <h1>{{componenteEnLinea}}</h1>
  <h2>ssaas</h2>
    <p>
      Fuente Mas Grande
    </p>
  `,
  styles: `
  h1{
    color: red
  } 
  p{
    font-size: 30px;
    color: blue;
  }
  
  `
})
export class ComponenteEnLineaComponent {

  componenteEnLinea =  "Componente en Líneaaa" ;

}
