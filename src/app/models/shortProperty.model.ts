import { Property } from "./property.model";

export class shortProperty {
    id?: string; // ID de la propiedad, puede ser opcional si lo genera el backend
    name: string; // Nombre de la propiedad (obligatorio)
    description: string; // Descripción de la propiedad (obligatorio)
    rooms: number; // Cantidad de habitaciones (obligatorio)
    bathrooms: number; // Cantidad de baños (obligatorio)
    petFriendly: boolean; // Indica si permite mascotas (obligatorio)
    pool: boolean; // Indica si tiene piscina (obligatorio)
    bbq: boolean; // Indica si tiene asador (obligatorio)
    pricePerNight: number; // Valor por noche de la propiedad
    ownerID: string; // ID del propietario (debe ser proporcionado por el sistema o usuario)
    municipalityID: string; // ID del municipio al que pertenece la propiedad (obligatorio)
    accessType?: string; // Tipo de acceso (carretera principal, secundaria, terciaria)

    constructor(
       property: Property, municipalityID: string
    ) {
        this.name = property.name;
        this.description = property.description;
        this.rooms = property.rooms;
        this.bathrooms = property.bathrooms;
        this.petFriendly = property.petFriendly;
        this.pool = property.pool;
        this.bbq = property.bbq;
        this.pricePerNight = property.pricePerNight;
        this.ownerID = property.ownerID;
        this.municipalityID = municipalityID
    }
}
