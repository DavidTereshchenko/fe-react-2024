import React from 'react';

import { ProductCart } from '@/components/ProductCart/ProductCart.tsx';
import ProductsListNav from '@/components/ProductsListNav/ProductsListNav.tsx';
import products from '@/productsList.json';
import styles from '@/screens/ProductsList/ProductsList.module.css';

interface ProductProps {
    updateTotalCart: () => void;
}

export const ProductsList: React.FC<ProductProps> = ({ updateTotalCart }) => (
    <main className={styles.productsContainer}>
        <ProductsListNav />
        <div className={styles.productsCart}>
            {products.map(({ id, title, images, price }) => (
                <ProductCart key={id} id={id} title={title} price={price} images={images} onCartChange={updateTotalCart} />
            ))}
        </div>
    </main>
);
