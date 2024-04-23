import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { Property } from '../../models/property.model';
import { PropertyService } from '../../services/new-property.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule


@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})

export class PropertiesComponent {
  properties!: Property[]// Declara una propiedad para almacenar las propiedades obtenidas

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.getProperties() // Llama a la función para obtener las propiedades al inicializar el componente
  }

  getProperties(): void {
    this.propertyService.getProperties().subscribe(
      (data) => {
        this.properties = data; // Asigna las propiedades obtenidas del servicio a la propiedad local
      },
      (error) => {
        console.error('Error al obtener propiedades:', error);
      }
    );
  }
  

}
