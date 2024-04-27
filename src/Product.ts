export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: [];
}

export interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: {};
    updatedAt: {};
}
