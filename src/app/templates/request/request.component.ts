import { Component, OnInit } from '@angular/core';
import { SolicitudArriendo } from './models/solicitud-arriendo.model';  // Asegúrate de ajustar la ruta del import

@Component({
  selector: 'app-request',
  templateUrl: './solicitudes-arriendo.component.html',
})
export class SolicitudesArriendoComponent implements OnInit {
  solicitudes: SolicitudArriendo[] = [];

  constructor(private arriendoService: ArriendoService) {} // Asume la existencia de un servicio

  ngOnInit() {
    this.cargarSolicitudes();
  }

  cargarSolicitudes(): void {
    this.arriendoService.obtenerSolicitudes().subscribe(solicitudes => {
      this.solicitudes = solicitudes;
    });
  }

  aceptarSolicitud(id: number): void {
    this.arriendoService.aceptarSolicitud(id).subscribe(() => {
      this.cargarSolicitudes();  // Recargar la lista después de aceptar
    });
  }

  cancelarSolicitud(id: number): void {
    this.arriendoService.cancelarSolicitud(id).subscribe(() => {
      this.cargarSolicitudes();  // Recargar la lista después de cancelar
    });
  }

  // Agrega métodos para calificar si es necesario
}
