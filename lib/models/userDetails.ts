import Address from "./address";
import Vehicle from "./vehicle";

class UserDetails {

    id: string;
    name: string;
    address: Address;
    vehicles: Vehicle[];

    constructor({id, name, address, vehicles}: {id: string, name: string, address: Address, vehicles: Vehicle[]}) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.vehicles = vehicles;
    }
}

export default UserDetails;