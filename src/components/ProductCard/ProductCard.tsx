import { BasketCard } from '@/components/BasketCard/BasketCard.tsx';
import styles from '@/components/ProductCard/ProductCard.module.css';
import ProductCards from '@/productsList.json';

export const ProductCard = () => (
    <main className={styles.productsContainer}>
        {ProductCards.map((cards) => (
            <div className={styles.card} key={cards.id}>
                <img src={cards.images[0]} className={styles.cardImage} alt="product" />
                <h3 className={styles.cardTitle}>{cards.title}</h3>
                <div className={styles.cardFooter}>
                    <p className={styles.cardPrise}>
                        {cards.price} <span className={styles.currency}>₴</span>
                    </p>
                    <BasketCard />
                </div>
            </div>
        ))}
    </main>
);
