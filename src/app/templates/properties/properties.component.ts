import { Component } from '@angular/core';
import { Property } from '../../models/property.model';
import { PropertyService } from '../../services/new-property.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PropertiesComponent {

  properties: Property[] = [];
  loadingDepartment: boolean = false;
  loadingMunicipality: boolean = false;

  constructor(private propertyService: PropertyService, private router: Router) { }

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(): void {
    this.propertyService.getPropertyByUserId(sessionStorage.getItem('token')!!).subscribe(
      (data) => {
        this.properties = data;
      },
      (error) => {
        console.error('Error al obtener propiedades:', error);
      }
    );
  }



  editProperty(propertyId: string): void {
    sessionStorage.setItem('propertyID', propertyId);
    this.router.navigate(['/edit-property']);
  }

  deactivate(property: string) {
    //Logica para desactivar propiedad
    }
  seeProperty(propertyId: string): void {
    sessionStorage.setItem('propertyID', propertyId);
    this.router.navigate(['/property-details']);
  }
}
