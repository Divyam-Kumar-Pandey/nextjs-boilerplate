class Vehicle {
    id: string;
    parkingNumber: string;
    registrationNumber: string;
    brand: string;
    model: string;
    variant: string;
    color: string;
    vehicleType: string;
    vehicleBodyType: string;

    constructor({id, parkingNumber, registrationNumber, brand, model, variant, color, vehicleType, vehicleBodyType}: {id: string, parkingNumber: string, registrationNumber: string, brand: string, model: string, variant: string, color: string, vehicleType: string, vehicleBodyType: string}) {
        this.id = id;
        this.parkingNumber = parkingNumber;
        this.registrationNumber = registrationNumber;
        this.brand = brand;
        this.model = model;
        this.variant = variant;
        this.color = color;
        this.vehicleType = vehicleType;
        this.vehicleBodyType = vehicleBodyType;
    }
}

export default Vehicle;