export class PropertySummary {
    id: string;
    name: string;
    image: string;
    department: string;
    municipality: string;
  
    constructor(id: string, name: string, image: string, department: string, municipality: string) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.department = department;
      this.municipality = municipality;
    }
  }
  