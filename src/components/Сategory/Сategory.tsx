import React from 'react';

import styles from '@/components/Сategory/Category.module.css';

const Category = () => (
    <div className={styles.categoryBlock}>
        <button className={styles.categoryItem}>Electronics</button>
        <button className={styles.categoryItem}>Shoes</button>
        <button className={styles.categoryItem}>Clothes</button>
    </div>
);

export default Category;
