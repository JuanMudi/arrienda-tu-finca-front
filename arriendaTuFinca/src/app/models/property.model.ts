export class Property {
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
        id: string | undefined,
        name: string,
        description: string,
        rooms: number,
        bathrooms: number,
        petFriendly: boolean,
        pool: boolean,
        bbq: boolean,
        pricePerNight: number,
        ownerID: string,
        municipalityID: string,
        accessType?: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.petFriendly = petFriendly;
        this.pool = pool;
        this.bbq = bbq;
        this.pricePerNight = pricePerNight;
        this.ownerID = ownerID;
        this.municipalityID = municipalityID;
        this.accessType = accessType;
    }
}
