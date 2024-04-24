import { Component } from '@angular/core';
import { Property } from '../../models/property.model';
import { PropertyService } from '../../services/new-property.service';
import { Router } from '@angular/router';
import { Observable, catchError, finalize, map } from 'rxjs';
import { Municipality } from '../../models/municipality.model';
import { CommonModule } from '@angular/common';
import { Location } from '../../models/location.model';

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

  getMunicipality(municipalityID: string): Observable<string> {
    this.loadingMunicipality = true;
    return this.propertyService.getMunicipalityById(municipalityID).pipe(
      map((municipality: Location) => municipality.name),
      catchError((error) => {
        console.error('Error al obtener municipio:', error);
        return 'Error al obtener municipio';
      }),
      finalize(() => this.loadingMunicipality = false)
    );
  }

  getDepartment(municipalityID: string): Observable<string> {
    this.loadingDepartment = true;
    return this.propertyService.getMunicipalityById(municipalityID).pipe(
      map((municipality: Location) => municipality.departmentName),
      catchError((error) => {
        console.error('Error al obtener departamento:', error);
        return 'Error al obtener departamento';
      }),
      finalize(() => this.loadingDepartment = false)
    );
  }

  editProperty(propertyId: string): void {
    sessionStorage.setItem('propertyID', propertyId);
    this.router.navigate(['/edit-property']);
  }
}
