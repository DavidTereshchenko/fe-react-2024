import { useState } from 'react';

import styles from '@/components/BasketHeader/BasketHeader.module.css';
import basket from '@/img/price/basketDark.svg';

export const BasketCard = () => {
    const [count, setCount] = useState(0);

    const handleBasket = () => {
        setCount(count + 1);
    };

    return (
        <div className={styles.basketBlock} onClick={handleBasket}>
            <img src={basket} alt="basket" className={styles.basket} />
            <span className={styles.basketCounter}>{count}</span>
        </div>
    );
};
