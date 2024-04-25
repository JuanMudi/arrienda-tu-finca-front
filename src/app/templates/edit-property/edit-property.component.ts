import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../../models/property.model';
import { PropertyService } from '../../services/new-property.service';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms'; // Importa FormBuilder y Validators
import { Department } from '../../models/department.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Municipality } from '../../models/municipality.model';
import { CommonModule } from '@angular/common';
import { shortProperty } from '../../models/shortProperty.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css'],
  standalone  : true,
  imports: [FormsModule, CommonModule]
})
export class EditPropertyComponent implements OnInit {
  property: Property = {
    id: '',
    name: '',
    municipalityName: '',
    departmentName: '',
    accessType: '',
    description: '',
    rooms: 0,
    bathrooms: 0,
    petFriendly: false,
    pool: false,
    bbq: false,
    ownerID: '',
    pricePerNight: 0
  };
  departments!: Observable<Department[]>; // Ahora es Observable<Department[]>
  municipalities = new BehaviorSubject<Municipality[]>([]);
  selectedDepartment: string = ''; // ID del departamento seleccionado
  propertyForm!: FormGroup; // Declara una propiedad para el formulario
  municipalityID: string = '';



  constructor(private route: ActivatedRoute, private propertyService: PropertyService, private formBuilder: FormBuilder, private router: Router) { // Agrega FormBuilder al constructor
  }

  ngOnInit(): void {
    this.departments = this.propertyService.loadDepartments();
    this.getProperty();

    this.propertyForm = this.formBuilder.group({
      name: [this.property.name, Validators.required],
      department: [this.property.departmentName, Validators.required],
      accessType: [this.property.accessType],
      description: [this.property.description, Validators.required],
      rooms: [this.property.rooms, Validators.required],
      bathrooms: [this.property.bathrooms, Validators.required],
      petFriendly: [this.property.petFriendly],
      pool: [this.property.pool],
      bbq: [this.property.bbq],
      pricePerNight: [this.property.pricePerNight, Validators.required]
    });
}

  getProperty(): void {
    const id = sessionStorage.getItem('propertyID');
    this.propertyService.getPropertyById(id!!).subscribe(
      property => {
        this.property = property;
         },
      error => {
        console.error('Error al obtener la propiedad:', error);
      }
    );
  }

  updateProperty(): void {
    const id = sessionStorage.getItem('propertyID');

    const pProperty = new shortProperty(this.property, this.municipalityID!!)
    this.propertyService.updateProperty(id!!,pProperty).subscribe({
      next: res => {

        if(res === 200){
        console.log('Propiedad actualizada!', res)
        this.router.navigate(['/properties']);
        } else {
          console.log('Error al actualizar la propiedad', res)
        }
      }   
    })
  

  }

  onDepartmentChange() {
    this.departments.subscribe(departments => {
        const foundDept = departments.find(d => d.id === this.selectedDepartment);
        console.log('foundDept', foundDept);
        if (foundDept) {
            this.municipalities.next(foundDept.municipalities);
        } else {
            this.municipalities.next([]);
        }
    });
}

}
