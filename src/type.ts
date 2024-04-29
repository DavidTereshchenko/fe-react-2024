export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: [];
    creationAt: string;
    updatedAt: string;
    category: {};
}

export interface ProductId {
    id: number;
    title: string;
    price: number;
    description: string;
    images: [];
    creationAt: string;
    updatedAt: string;
    category: {};
}

export interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}

export interface CategoryId {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}

export interface User {
    email: string;
    name: string;
    password: string;
    role: string;
    avatar: string;
}

export interface UserId {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
    creationAt: string;
    updatedAt: string;
}
