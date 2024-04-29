import { Logo } from '@/components/Header/LogoAndMode/Logo.tsx';
import { Menu } from '@/components/Header/Menu/Menu.tsx';

import styles from './Header.module.css';
const HeaderComponent = () => (
    <header className={styles.header}>
        <div className={styles.headerBlock}>
            <Logo />
            <Menu />
        </div>
    </header>
);

export default HeaderComponent;
