import React from 'react';

import styles from '@/components/Search/Search.module.css';
import searchIcon from '@/img/search icon.svg';
const Search = () => (
    <div className={styles.searchBlock}>
        <input type="text" className={styles.searchInput} placeholder="Search..." />
        <img src={searchIcon} alt="search icon" className={styles.searchIcon} />
    </div>
);

export default Search;
