class Address {
    id: string;
    houseNumber: string;
    societyUniqueCode: string;
    societyName: string;
    area: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    residentialAreaType: string;

    constructor({id, houseNumber, societyUniqueCode, societyName, area, address, city, state, pincode, residentialAreaType}: {id: string, houseNumber: string, societyUniqueCode: string, societyName: string, area: string, address: string, city: string, state: string, pincode: string, residentialAreaType: string}) {
        this.id = id;
        this.houseNumber = houseNumber;
        this.societyUniqueCode = societyUniqueCode;
        this.societyName = societyName;
        this.area = area;
        this.address = address;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
        this.residentialAreaType = residentialAreaType;
    }
}

export default Address;
