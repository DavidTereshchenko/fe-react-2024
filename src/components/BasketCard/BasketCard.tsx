import type { FC, MouseEventHandler } from 'react';

import styles from '@/components/BasketHeader/BasketHeader.module.css';
import basket from '@/img/price/basketDark.svg';

interface LocalStore {
    onClick: MouseEventHandler<HTMLImageElement>;
    quantity: number | undefined;
}

export const BasketCard: FC<LocalStore> = (props) => (
    <div className={styles.basketBlock}>
        <img src={basket} alt="basket" onClick={props.onClick} className={styles.basket} />
        {typeof props.quantity === 'number' && props.quantity >= 1 && <span className={styles.basketCounter}>{props.quantity}</span>}
    </div>
);
