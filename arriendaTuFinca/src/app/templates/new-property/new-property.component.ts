import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/new-property.service';
import { Property } from '../../models/property.model';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'app-create-property',
    templateUrl: './new-property.component.html',
    imports: [FormsModule],
    styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent implements OnInit {
    // Variables para almacenar los datos de la nueva propiedad
    newProperty: Property = { 
        name: '',
        description: '',
        rooms: 0,
        bathrooms: 0,
        petFriendly: false,
        pool: false,
        bbq: false,
        pricePerNight: 0,
        ownerID: '', // Asigna el ID del propietario, puede ser del usuario actual
        municipalityID: '', // El ID del municipio debe seleccionarse de los datos disponibles
        accessType: '' // Tipo de ingreso (carretera principal, secundaria, terciaria)
    };

    // Lista de municipios para la selección
    municipalities: Array<{ id: string; name: string }> = [];
    
    // Mensaje de error
    errorMessage: string | null = null;

    // Inyectar el servicio PropertyService
    constructor(private propertyService: PropertyService) {}

    ngOnInit(): void {
        // Cargar municipios al iniciar el componente
        this.loadMunicipalities();
    }

    // Cargar municipios desde el servicio (puede ser un método del servicio)
    loadMunicipalities(): void {
        // Implementar la lógica para cargar municipios
        // Por ejemplo, obtener datos de una API o un servicio local
        // Asigna los datos a la lista `municipalities`
        // Aquí está un ejemplo ficticio:
        this.municipalities = [
            { id: '581a341c-e8a5-451e-bae7-374daa27b2c9', name: 'Municipio A' },
            { id: '8be5e041-34d7-4f2b-a589-256f4edc1d59', name: 'Municipio B' },
            // Agregar más municipios según sea necesario
        ];
    }

    // Crear una nueva propiedad
    createNewProperty(): void {
        this.errorMessage = null; // Limpiar mensaje de error

        // Llamar al servicio para crear la nueva propiedad
        this.propertyService.createProperty(this.newProperty).subscribe(
            (createdProperty) => {
                // Manejar la propiedad creada, por ejemplo, redirigir a la página de detalles
                console.log('Propiedad creada:', createdProperty);
                // Aquí puedes redirigir al usuario a la página de detalles o mostrar un mensaje de éxito
            },
            (error) => {
                // Manejar errores, mostrar mensaje de error
                console.error('Error al crear la propiedad:', error);
                this.errorMessage = 'Hubo un error al crear la propiedad. Por favor, inténtelo de nuevo.';
            }
        );
    }
}
