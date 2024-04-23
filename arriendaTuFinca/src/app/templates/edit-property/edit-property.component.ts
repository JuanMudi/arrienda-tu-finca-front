import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../../models/property.model';
import { PropertiesService } from '../../services/properties.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css'],
  imports: [FormsModule],
  standalone: true
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

  constructor(private route: ActivatedRoute, private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.getProperty();
  }

  getProperty(): void {
    const id = sessionStorage.getItem('propertyID');
    this.propertiesService.getProperty(id!!).subscribe(
      property => {
        this.property = property;
      },
      error => {
        console.error('Error al obtener la propiedad:', error);
      }
    );
  }

  updateProperty(): void {
    this.propertiesService.updateProperty(this.property).subscribe(
      () => {
        // Navegar a la página de detalles de la propiedad o a otra página relevante
      },
      error => {
        console.error('Error al actualizar la propiedad:', error);
      }
    );
  }
}
