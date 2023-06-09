import { Category } from "./Category";

export interface Phone {
    brand?: string;
    description?: string;
    id?: number;
    category?: Category;
    imgUrl?: string;
    price?: number;
}
