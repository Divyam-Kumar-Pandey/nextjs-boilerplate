import { BASE_URL } from "../constants";

export const getCustomerReport = async () => {
    const response = await fetch(
        `${BASE_URL}/api/v1/customer/report`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`, 
            },
        }
    );
    const blob = await response.blob();
    return blob;
};