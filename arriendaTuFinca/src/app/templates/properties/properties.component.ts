import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { PropertySummary } from '../../models/propertySummary.model';
import { PropertiesService } from '../../services/properties.service';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {
  properties!: PropertySummary[] // Declara una propiedad para almacenar las propiedades obtenidas

  constructor(private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.getProperties() // Llama a la función para obtener las propiedades al inicializar el componente
  }

  getProperties(): void {
    this.propertiesService.getProperties().subscribe(
      (data) => {
        this.properties = data; // Asigna las propiedades obtenidas del servicio a la propiedad local
      },
      (error) => {
        console.error('Error al obtener propiedades:', error);
      }
    );
  }
  

}
