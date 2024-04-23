import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PropertySummary } from '../models/propertySummary.model';
import { Property } from '../models/property.model';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  private apiUrl = '...'; // URL de tu API para obtener las propiedades

  constructor(private http: HttpClient) { }

  getProperties(): Observable<PropertySummary[]> {
    return this.http.get<PropertySummary[]>(this.apiUrl); // Realiza una petición GET para obtener las propiedades
  }

  getProperty(id : string): Observable<Property> {
    return this.http.get<Property>(this.apiUrl); // Realiza una petición GET para obtener las propiedades
  }

  updateProperty(property: Property): Observable<void> {
    return this.http.put<void>(this.apiUrl, property); // Realiza una petición PUT para actualizar la propiedad
  }

}
