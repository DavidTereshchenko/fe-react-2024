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

const MAX_TITLE_LENGTH = 27;

export const ProductCart: FC<Card> = ({ title, images, onCartChange, price, id }) => {
    const initialProductIds = localStorage.getItem('cartIds');
    const [productIds, setProductIds] = useState<string[]>(initialProductIds ? JSON.parse(initialProductIds) : []);

    const isInCart = productIds.includes(id.toString());

    const getTruncatedTitle = (titleCart: string) => {
        if (titleCart.length <= MAX_TITLE_LENGTH) {
            return title;
        }

        return `${title.slice(0, MAX_TITLE_LENGTH - 3)} ...more`;
    };

    const handleCartClick = () => {
        const inCart = initialProductIds ? JSON.parse(initialProductIds) : [];
        const updatedCartIds = isInCart ? inCart?.filter((idCart: string) => idCart !== id.toString()) : [...inCart, id.toString()];

        localStorage.setItem('cartIds', JSON.stringify(updatedCartIds));
        setProductIds(updatedCartIds);
    };
    useEffect(() => {
        onCartChange();
    }, [productIds, onCartChange]);

    return (
        <div className={styles.card} key={id}>
            <img src={images[0]} className={styles.cardImage} alt="product" />
            <h3 className={styles.cardTitle}>{getTruncatedTitle(title)}</h3>
            <div className={styles.cardFooter}>
                <p className={styles.cardPrise}>
                    {price} <span className={styles.currency}>₴</span>
                </p>
                <div className={styles.cartBlock}>
                    <button onClick={handleCartClick} className={styles.cardIcon}>
                        <img src={cartIcon} alt="cart icon" className={styles.cardIcon} />
                    </button>
                    {isInCart && <div className={styles.counter}>1</div>}
                </div>
            </div>
        </div>
    );
};
