import React from 'react';

import styles from '@/components/BasketHeader/BasketHeader.module.css';
import basket from '@/img/price/basketDark.svg';

export const Cart = (props: { addLocalStore: (productId: number) => void; id: number; quantity: Record<number, number> | number }) => (
    <div className={styles.basketBlock} onClick={() => props.addLocalStore(props.id)}>
        <img src={basket} alt="basket" className={styles.basket} />
        {typeof props.quantity === 'number' && props.quantity > 0 && <span className={styles.basketCounter}>{props.quantity}</span>}
    </div>
);
