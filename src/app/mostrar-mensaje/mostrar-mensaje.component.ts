import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css',
})
export class MostrarMensajeComponent {
  mensaje: String = '';
  resetearMensaje() {
    this.mensaje = '';
  }
  mostrarMensaje() {
    this.mensaje = 'Has hecho clic en el botón para mostrar el mensaje.';
  }
}
