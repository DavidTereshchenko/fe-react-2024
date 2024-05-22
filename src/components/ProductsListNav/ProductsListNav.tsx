import React from 'react';

import styles from '@/components/ProductsListNav/ProductsListNav.module.css';
import Search from '@/components/Search/Search.tsx';
import Sort from '@/components/Sort/Sort.tsx';
import Category from '@/components/Сategory/Сategory.tsx';

const ProductsListNav = () => (
    <nav className={styles.navContainer}>
        <Search />
        <div className={styles.categoryAndSort}>
            <Category />
            <Sort />
        </div>
    </nav>
);

export default ProductsListNav;
