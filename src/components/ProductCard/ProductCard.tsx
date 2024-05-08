import { useState } from 'react';

import { BasketCard } from '@/components/BasketCard/BasketCard.tsx';
import styles from '@/components/ProductCard/ProductCard.module.css';
import ProductCards from '@/productsList.json';

interface BasketItem {
    id: number;
    quantity: number;
    length: number;
}

export const ProductCard = () => {
    const [, setBasketItems] = useState<BasketItem[]>([]);
    const [productQuantities, setProductQuantities] = useState<Record<number, number>>({});
    const addToBasket = (productId: number) => {
        const existingBasket = JSON.parse(localStorage.getItem('basket') || '[]');
        const currentQuantity = productQuantities[productId] || 1;

        const itemExists = existingBasket.find((item: { id: number }) => item.id === productId);

        if (itemExists) {
            const updatedBasket = existingBasket.map((item: { id: number; quantity: number }) => {
                if (item.id === productId) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

            setBasketItems(updatedBasket);
            localStorage.setItem('basket', JSON.stringify(updatedBasket));
            setProductQuantities({ ...productQuantities, [productId]: currentQuantity + 1 });
        } else {
            const newBasketItem = { id: productId, quantity: 1 };
            setBasketItems([...existingBasket, newBasketItem]);
            localStorage.setItem('basket', JSON.stringify([...existingBasket, newBasketItem]));
        }
    };

    return (
        <main className={styles.productsContainer}>
            {ProductCards.map((cards) => (
                <div className={styles.card} key={cards.id}>
                    <img src={cards.images[0]} className={styles.cardImage} alt="product" />
                    <h3 className={styles.cardTitle}>{cards.title}</h3>
                    <div className={styles.cardFooter}>
                        <p className={styles.cardPrise}>
                            {cards.price} <span className={styles.currency}>₴</span>
                        </p>
                        <BasketCard key={cards.id} quantity={productQuantities[cards.id] || 0} onClick={() => addToBasket(cards.id)} />
                    </div>
                </div>
            ))}
        </main>
    );
};
