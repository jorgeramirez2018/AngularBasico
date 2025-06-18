import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {

  titulo = "Universidad Angular";
  usuario = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
  }
  saludar(){
    return `Hola, mi nombre es ${this.usuario.nombre} ${this.usuario.apellido} y tengo ${this.usuario.edad} años.`;
  }

}
