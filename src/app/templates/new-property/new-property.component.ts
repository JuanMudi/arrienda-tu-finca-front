import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyService } from '../../services/new-property.service';
import { Property } from '../../models/property.model';
import { FormsModule } from '@angular/forms';
import { Municipality} from '../../models/municipality.model';
import { Department } from '../../models/department.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-create-property',
    templateUrl: './new-property.component.html',
    imports: [FormsModule, CommonModule, HttpClientModule],
    styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent implements OnInit {
    departments!: Observable<Department[]>; // Ahora es Observable<Department[]>
    municipalities = new BehaviorSubject<Municipality[]>([]);
    selectedDepartment: string = ''; // ID del departamento seleccionado

    property: Property = {
        name: '',
        description: '',
        rooms: 0,
        bathrooms: 0,
        petFriendly: false,
        pool: false,
        bbq: false,
        pricePerNight: 0,
        ownerID: window.sessionStorage.getItem('token') || '',
        municipalityID: ''
    };

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
    

    createProperty() {
        this.propertyService.createProperty(this.property).subscribe({
            next: (res) => console.log('Property created!', res),
            error: (err) => console.error('Error creating property', err)
        });
        this.router.navigate(['/properties']); // Uso de Angular Router para la redirección
    }
}
