import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property.model';
import { FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../../services/new-property.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-rental',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './request-rental.component.html',
  styleUrl: './request-rental.component.css'
})
export class RequestRentalComponent  implements OnInit{


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
    municipalityName: '',
    departmentName: ''
};
propertyForm!: FormGroup; // Declara una propiedad para el formulario
  formBuilder: any;


  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    console.log('PropertyDetailsComponent.onInit()');
    
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
      console.log('Propiedad obtenida:', property);
      this.property = property;
       },
    error => {
      console.error('Error al obtener la propiedad:', error);
    }
  );
}

rentalRequest()
{
   



}

}

