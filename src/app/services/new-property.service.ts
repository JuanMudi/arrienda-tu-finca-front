import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Property } from '../models/property.model';
import { Department } from '../models/department.model'; // Asegúrate de que el path sea correcto
import { response } from 'express';


@Injectable({
    providedIn: 'root',
})
export class PropertyService {
    private apiUrl = 'https://gruposjaveriana.dynaco.co/grupo-1-1';

    constructor() {}

    /// Cargar departamentos y manejar los datos para adecuarlos al modelo Department
    loadDepartments(): Observable<Department[]> {
        return from(axios.get<Department[]>(`${this.apiUrl}/department`)).pipe(
            map(response => response.data.map(dept => ({
                ...dept,
                municipalities: dept.municipalities || []
            })))
        );
    }

    getMunicipalityById(municipalityId: string): Observable<any> {
        // Haz la llamada a la API para obtener el municipio por ID
        return new Observable<any>((observer) => {
          axios.get(`${this.apiUrl}/municipality/${municipalityId}`)
            .then((response) => {
              observer.next(response.data);
              observer.complete();
            })
            .catch((error) => {
              observer.error(error);
            });
        });
      }


    // Crear una nueva propiedad
    createProperty(property: Property): Observable<Property> {
        return from(axios.post<Property>(`${this.apiUrl}/property`, property)).pipe(
            map(response => response.data)
        );
    }

    // Obtener todas las propiedades
    getProperties(): Observable<Property[]> {
        return from(axios.get<Property[]>(`${this.apiUrl}/property`)).pipe(
            map(response => response.data)
        );
    }

    // Obtener una propiedad por ID
    getPropertyById(id: string): Observable<Property> {
        return from(axios.get<Property>(`${this.apiUrl}/property/${id}`)).pipe(
            map(response => response.data)
        );
    }

    //Obtener propiedades de un usuario
    getPropertyByUserId(id: string): Observable<Property[]>{
        return from(axios.get<Property[]>(`${this.apiUrl}/property?owner=${id}`)).pipe(
            map(response => response.data)
        )
    }

    // Actualizar una propiedad por ID
    updateProperty(id: string, property: Property): Observable<Property> {
        return from(axios.put<Property>(`${this.apiUrl}/property/${id}`, property)).pipe(
            map(response => response.data)
        );
    }

    // Eliminar una propiedad por ID
    deleteProperty(id: string): Observable<void> {
        return from(axios.delete<void>(`${this.apiUrl}/property/${id}`)).pipe(
            map(response => response.data)
        );
    }
}
