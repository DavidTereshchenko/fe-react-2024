import styles from '@/components/BasketHeader/BasketHeader.module.css';
import basket from '@/img/basketWhite.svg';

export const BasketHeader = () => (
    <div className={styles.basketBlock}>
        <img src={basket} alt="basket" className={styles.basket} />
        <span className={styles.basketCounter}>1</span>
    </div>
);
