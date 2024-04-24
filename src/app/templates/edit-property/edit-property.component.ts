import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../../models/property.model';
import { PropertyService } from '../../services/new-property.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importa FormBuilder y Validators
import { Department } from '../../models/department.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Municipality } from '../../models/municipality.model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css'],
  standalone  : true,
  imports: [ReactiveFormsModule]
})
export class EditPropertyComponent implements OnInit {
  property: Property = {
    id: '',
    name: '',
    municipalityID: '',
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

  constructor(private route: ActivatedRoute, private propertyService: PropertyService, private formBuilder: FormBuilder) { // Agrega FormBuilder al constructor
    this.initForm(); // Inicializa el formulario en el constructor
  }

  ngOnInit(): void {
    this.getProperty();
  }

  initForm(): void {
    this.propertyForm = this.formBuilder.group({
      name: [this.property.name, Validators.required], // Añade validadores si es necesario
      // Agrega los demás campos del formulario con sus valores iniciales y validadores si es necesario
    });
  }

  getProperty(): void {
    const id = sessionStorage.getItem('propertyID');
    this.propertyService.getPropertyById(id!!).subscribe(
      property => {
        this.property = property;
        // Actualiza los valores del formulario cuando se obtiene la propiedad
        this.propertyForm.patchValue({
          name: property.name,
          // Actualiza los demás campos del formulario según la propiedad obtenida
        });
      },
      error => {
        console.error('Error al obtener la propiedad:', error);
      }
    );
  }

  updateProperty(): void {
    // Lógica para actualizar la propiedad
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

}
