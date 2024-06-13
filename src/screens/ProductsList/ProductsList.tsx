import React from 'react';
import { useState } from 'react';

import { ProductCart } from '@/components/ProductCart/ProductCart.tsx';
import ProductsListNav from '@/components/ProductsListNav/ProductsListNav.tsx';
import { products } from '@/constans/products.constant.ts';
import type { Product } from '@/models/product.model.ts';
import styles from '@/screens/ProductsList/ProductsList.module.css';
import type { Cart } from '@/types/cart.type.ts';

interface ProductProps {
    updateTotalCart: () => void;
}

export const ProductsList: React.FC<ProductProps> = ({ updateTotalCart }) => {
    const initialProductIds = localStorage.getItem('cart') || '{}';
    const [productsCart, setProductsCart] = useState<Cart>(initialProductIds ? JSON.parse(initialProductIds) : {});
    return (
        <main className={styles.productsContainer}>
            <ProductsListNav />
            <div className={styles.productsCart}>
                {products.map((item: Product) => (
                    <ProductCart
                        key={item.id}
                        onCartChange={updateTotalCart}
                        productsCart={productsCart}
                        setProductsCart={setProductsCart}
                        product={item}
                    />
                ))}
            </div>
        </main>
    );
};
