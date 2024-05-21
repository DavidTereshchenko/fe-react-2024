import React from 'react';

import styles from '@/components/Sort/Sort.module.css';

const Sort = () => (
    <div className={styles.sortBlock}>
        <p className={styles.sortText}>Sort by :</p>
        <select className={styles.sortSelect}>
            <option className={styles.sortSelectOption}>Price (High - Low)</option>
            <option>Newest</option>
            <option>Oldest</option>
        </select>
    </div>
);

export default Sort;
