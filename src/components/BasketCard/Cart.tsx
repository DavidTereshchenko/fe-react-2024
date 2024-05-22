import React from 'react';

import styles from '@/components/BasketCard/Cart.module.css';
import basket from '@/img/price/basketDark.svg';

export const Cart = () => (
    <div className={styles.basketBlock}>
        <img src={basket} alt="basket" className={styles.basket} />
        <span className={styles.basketCounter}></span>
    </div>
);
