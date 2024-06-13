import React, { useEffect } from 'react';

import { CartIcon } from '@/components/CartIcon.tsx';
import styles from '@/components/ProductCart/ProductCard.module.css';
import type { Product } from '@/models/product.model.ts';
import type { Cart } from '@/types/cart.type.ts';

interface ProductCardProps {
    product: Product;
    onCartChange: () => void;
    productsCart: Cart;
    setProductsCart: (cart: Cart) => void;
}

const MAX_TITLE_LENGTH = 33;

export const ProductCart: React.FC<ProductCardProps> = ({ productsCart, setProductsCart, onCartChange, product }) => {
    const isInCart = productsCart[product.id.toString()];

    const productCount = isInCart?.count || 0;

    const handleCartClick = () => {
        const updatedCart: Cart = isInCart
            ? { ...productsCart, [product.id]: { count: isInCart.count + 1 } }
            : { ...productsCart, [product.id]: { count: 1 } };

        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setProductsCart(updatedCart);
    };

    useEffect(() => {
        onCartChange();
    }, [onCartChange, productCount]);

    const getTruncatedTitle = (titleCart: string) => {
        if (titleCart.length <= MAX_TITLE_LENGTH) {
            return product.title;
        }

        return `${product.title.slice(0, MAX_TITLE_LENGTH - 3)} ...`;
    };

    return (
        <div className={styles.card}>
            <img src={product.images[0]} className={styles.cardImage} alt="product" />
            <h3 className={styles.cardTitle}>{getTruncatedTitle(product.title)}</h3>
            <div className={styles.cardFooter}>
                <p className={styles.cardPrise}>
                    {product.price} <span className={styles.currency}>₴</span>
                </p>
                <CartIcon isInCart={isInCart} productCount={productCount} handleClick={handleCartClick} />
            </div>
        </div>
    );
};
