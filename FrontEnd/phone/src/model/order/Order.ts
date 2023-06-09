import { Phone } from "../phone/PhoneModel";


export interface Order {
    id?: number;
    quantity?: number;
    phone?: Phone;
}
