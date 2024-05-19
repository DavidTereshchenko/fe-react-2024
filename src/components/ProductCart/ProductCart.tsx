import type { FC } from 'react';
import React from 'react';

import { Cart } from '@/components/BasketCard/Cart.tsx';
import styles from '@/components/ProductCart/ProductCard.module.css';

interface Card {
    id: number;
    title: string;
    price: number;
    images: string[];
    addLocalStore: (productId: number) => void;
    quantity: Record<number, number>;
}

export const ProductCart: FC<Card> = (props) => (
    <main>
        <div className={styles.card} key={props.id}>
            <img src={props.images[0]} className={styles.cardImage} alt="product" />
            <h3 className={styles.cardTitle}>{props.title}</h3>
            <div className={styles.cardFooter}>
                <p className={styles.cardPrise}>
                    {props.price} <span className={styles.currency}>₴</span>
                </p>
                <Cart key={props.id} id={props.id} addLocalStore={props.addLocalStore} quantity={props.quantity[props.id] || 0} />
            </div>
        </div>
    </main>
);
