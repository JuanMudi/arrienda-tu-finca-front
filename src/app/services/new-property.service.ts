import { Injectable } from '@angular/core';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Property } from '../models/property.model';
import { Department } from '../models/department.model'; // Asegúrate de que el path sea correcto
import { response } from 'express';
import { Location } from '../models/location.model';
import { shortProperty } from '../models/shortProperty.model';



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

    getMunicipalityById(municipalityId: string): Observable<Location> {
        return from(axios.get<Location>(`${this.apiUrl}/municipality/${municipalityId}`)).pipe(
            map(response => response.data)
        );
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

     // Obtener todas las propiedades
     findProperties(municipality: string, name: String): Observable<Property[]> {
        if(municipality === '' && name === '')
            {
                return from(axios.get<Property[]>(`${this.apiUrl}/property`)).pipe(
                    map(response => response.data)
                );
            }
        if(municipality === '' && name !== '')
            {
                return from(axios.get<Property[]>(`${this.apiUrl}/property/find?name=${name}`)).pipe(
                    map(response => response.data)
                );
            }
        if(municipality !== '' && name === '')
            {
                return from(axios.get<Property[]>(`${this.apiUrl}/property/find?municipality=${municipality}`)).pipe(
                    map(response => response.data)
                );
            }
            
        return from(axios.get<Property[]>(`${this.apiUrl}/property/find?municipality=${municipality}&name=${name}`)).pipe(
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
    updateProperty(id: string, property: shortProperty) {
        return from(axios.put<Property>(`${this.apiUrl}/property/${id}`, property)).pipe(
            map(response => response.status)
        );
    }

    // Eliminar una propiedad por ID
    deleteProperty(id: string): Observable<void> {
        return from(axios.delete<void>(`${this.apiUrl}/property/${id}`)).pipe(
            map(response => response.data)
        );
    }
}
