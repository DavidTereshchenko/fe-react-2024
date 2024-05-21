import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

import styles from '@/components/ProductCart/ProductCard.module.css';
import cartIcon from '@/img/basketWhite.svg';

interface Card {
    id: number;
    title: string;
    price: number;
    images: string[];
    onCartChange: () => void;
}

export const ProductCart: FC<Card> = (props) => {
    const initialProductIds = localStorage.getItem('cartIds');
    const [productIds, setProductIds] = useState<string[]>(initialProductIds ? JSON.parse(initialProductIds) : []);

    const isInCart = productIds.includes(props.id.toString());

    const handleCartClick = () => {
        const inCart = initialProductIds ? JSON.parse(initialProductIds) : [];
        const updatedCartIds = isInCart ? inCart?.filter((id: string) => id !== props.id.toString()) : [...inCart, props.id.toString()];

        localStorage.setItem('cartIds', JSON.stringify(updatedCartIds));
        setProductIds(updatedCartIds);
    };

    useEffect(() => {
        props.onCartChange();
    }, [productIds, props, props.onCartChange]);

    return (
        <main className={styles.productsContainer}>
            <div className={styles.card} key={props.id}>
                <img src={props.images[0]} className={styles.cardImage} alt="product" />
                <h3 className={styles.cardTitle}>{props.title}</h3>
                <div className={styles.cardFooter}>
                    <p className={styles.cardPrise}>
                        {props.price} <span className={styles.currency}>₴</span>
                    </p>
                    <div className={styles.cartBlock}>
                        <button onClick={handleCartClick} className={styles.cardIcon}>
                            <img src={cartIcon} alt="cart icon" className={styles.cardIcon} />
                        </button>
                        {isInCart && <div className={styles.counter}>1</div>}
                    </div>
                </div>
            </div>
        </main>
    );
};
