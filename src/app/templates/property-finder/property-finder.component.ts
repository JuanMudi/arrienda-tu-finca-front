import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Department } from '../../models/department.model';
import { Municipality } from '../../models/municipality.model';
import { PropertyService } from '../../services/new-property.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-property-finder',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './property-finder.component.html',
  styleUrl: './property-finder.component.css'
})
export class PropertyFinderComponent {

    departments!: Observable<Department[]>; // Ahora es Observable<Department[]>
    municipalities = new BehaviorSubject<Municipality[]>([]);
    selectedDepartment: string = ''; // ID del departamento seleccionado
    searchName: string = '';
    searchMunicipality: string = '';
    properties: Property[] = [];



    constructor(private propertyService: PropertyService, private router: Router ) { }

    ngOnInit(): void {
      this.departments = this.propertyService.loadDepartments();
  }

  onDepartmentChange() {
      this.departments.subscribe(departments => {
          const foundDept = departments.find(d => d.id === this.selectedDepartment);
          if (foundDept) {
              this.municipalities.next(foundDept.municipalities);
          } else {
              this.municipalities.next([]);
          }
      });
  }

  searchProperties() {
        this.propertyService.findProperties(this.searchMunicipality, this.searchName).subscribe(
            (data) => {
                this.properties = data;
                console.log('Propiedades encontradas:', this.properties);
            },
            (error) => {
                console.error('Error al buscar propiedades:', error);
            }
        );

  }
  seeProperty(propertyId: string): void {
    sessionStorage.setItem('propertyID', propertyId);
    this.router.navigate(['/rental-request']);
  }

 

}
