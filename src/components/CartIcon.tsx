import type { FC } from 'react';
import React from 'react';

import styles from '@/components/ProductCart/ProductCard.module.css';
import cartIcon from '@/img/basketWhite.svg';

interface Cart {
    handleClick: () => void;
    isInCart: { count: number };
    productCount: number;
}

export const CartIcon: FC<Cart> = ({ handleClick, isInCart, productCount }) => (
    <div className={styles.cartBlock}>
        <button onClick={handleClick} className={styles.cardIcon}>
            <img src={cartIcon} alt="cart icon" className={styles.cardIcon} />
        </button>
        {isInCart && <div className={styles.counter}>{productCount}</div>}
    </div>
);
