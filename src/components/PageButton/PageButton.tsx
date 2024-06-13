import React from 'react';

import styles from '@/components/Header/Header.module.css';
import type { ActivePage } from '@/types/state.ts';

interface Page {
    handleActivePage: (page: ActivePage) => void;
    activePage: ActivePage;
    title: string;
    screen: string;
}

const PageButton: React.FC<Page> = ({ handleActivePage, activePage, title, screen }) => (
    <button className={activePage === screen ? styles.activeButton : styles.defaultLink} onClick={() => handleActivePage('about')}>
        {title}
    </button>
);

export default PageButton;
