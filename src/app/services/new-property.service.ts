import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Property } from '../models/property.model';
import { municipality } from '../models/municipality.model';

@Injectable({
    providedIn: 'root',
})
export class PropertyService {

    constructor() {}

    private apiUrl = 'https://gruposjaveriana.dynaco.co/grupo-1-1';


    getMunicipalities(): Promise<municipality[]> {
        return axios.get<municipality[]>(this.apiUrl + "/municipality").then((response) => response.data);
    }

    



    // Crear una nueva propiedad
    createProperty(property: Property): Observable<Property> {
        return from(axios.post<Property>(this.apiUrl + "/property", property)).pipe(
            map((response: AxiosResponse<Property>) => response.data)
        );
    }

    // Obtener todas las propiedades
    getProperties(): Observable<Property[]> {
        return from(axios.get<Property[]>(this.apiUrl)).pipe(
            map((response: AxiosResponse<Property[]>) => response.data)
        );
    }

    // Obtener una propiedad por ID
    getPropertyById(id: string): Observable<Property> {
        const url = `${this.apiUrl}/${id}`;
        return from(axios.get<Property>(url)).pipe(
            map((response: AxiosResponse<Property>) => response.data)
        );
    }

    // Actualizar una propiedad por ID
    updateProperty(id: string, property: Property): Observable<Property> {
        const url = `${this.apiUrl}/${id}`;
        return from(axios.put<Property>(url, property)).pipe(
            map((response: AxiosResponse<Property>) => response.data)
        );
    }

    // Eliminar una propiedad por ID
    deleteProperty(id: string): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return from(axios.delete<void>(url)).pipe(
            map((response: AxiosResponse<void>) => response.data)
        );
    }
}
