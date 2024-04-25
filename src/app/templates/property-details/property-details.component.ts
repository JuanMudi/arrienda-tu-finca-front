import { Component } from '@angular/core';
import { Property } from '../../models/property.model';
import { PropertyService } from '../../services/new-property.service';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent {

  property! : Property

  constructor(private propertyService: PropertyService) { }

  onInit() {
    this.propertyService.getPropertyById(sessionStorage.getItem('propertyId')!).subscribe((property: Property) => {;
  })


}

}
