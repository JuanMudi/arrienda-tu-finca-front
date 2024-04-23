import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../../services/new-property.service';
import { Property } from '../../models/property.model';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { municipality } from '../../models/municipality.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule

@Component({
    standalone: true,
    selector: 'app-create-property',
    templateUrl: './new-property.component.html',
    imports: [FormsModule, CommonModule, HttpClientModule],
    styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent implements OnInit {

    municipalities: Promise<municipality[]> = new Promise<municipality[]>(() => []);

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
    }

    constructor(private propertyService: PropertyService) { 
        this.ngOnInit()
    }

    ngOnInit(): void {
        if(window.sessionStorage.getItem('token') === null) {
            window.location.href = '/login';
        
        }
        this.municipalities = this.propertyService.getMunicipalities()
    }

    createProperty() {
        this.propertyService.createProperty(this.property)
    }
       
}
