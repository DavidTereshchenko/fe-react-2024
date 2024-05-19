import styles from '@/components/BasketHeader/BasketHeader.module.css';
import basket from '@/img/basketWhite.svg';

export const BasketHeader = (props: { basketCount: number }) => (
    <div className={styles.basketBlock}>
        <img src={basket} alt="basket" className={styles.basket} />
        {props.basketCount > 0 && <span className={styles.basketCounter}>{props.basketCount}</span>}
    </div>
);
