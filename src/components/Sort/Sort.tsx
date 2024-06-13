import React from 'react';

import { ArrowSort } from '@/assets/icons/ArrowSort.tsx';
import styles from '@/components/Sort/Sort.module.css';

const Sort = () => (
    <label className={styles.label} id="btn">
        Sort by:
        <div className={styles.sortSelect}>
            <button id="btn" className={styles.dropdown}>
                Price (High - low)
                <button className={styles.arrow}>
                    <ArrowSort />
                </button>
            </button>
            <div className={styles.dropdownContent}>
                <li className={styles.listText}>Price (High - low)</li>
                <li className={styles.listText}>Price (Low - High)</li>
                <li className={styles.listText}>Newest</li>
                <li className={styles.listText}>Oldest</li>
            </div>
        </div>
    </label>
);

export default Sort;
