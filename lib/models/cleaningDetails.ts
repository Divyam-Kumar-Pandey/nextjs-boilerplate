class CleaningDetails {

    vehicleId: string;
    cleaningDate: string;
    cleaningTime: string;
    cleaningType: string;

    constructor({vehicleId, cleaningDate, cleaningTime, cleaningType}: {vehicleId: string, cleaningDate: string, cleaningTime: string, cleaningType: string}) {
        // cleaningDate format: dd-mm-yyyy
        // cleaningTime format: hh:mm:ss
        if(!cleaningDate.match(/^\d{2}-\d{2}-\d{4}$/)) {
            throw new Error("Invalid cleaning date format");
        }

        if(!cleaningTime.match(/^\d{2}:\d{2}:\d{2}$/)) {
            throw new Error("Invalid cleaning time format");
        }

        this.vehicleId = vehicleId;
        this.cleaningDate = cleaningDate;
        this.cleaningTime = cleaningTime;
        this.cleaningType = cleaningType;
    }
}

export default CleaningDetails;