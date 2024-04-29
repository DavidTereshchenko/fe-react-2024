import LogoAndMode from '@/components/LogoAndMode/LogoAndMode.tsx';
import Menu from '@/components/Menu/Menu.tsx';

import styles from './Header.module.css';
const Header = () => (
    <header className={styles.header}>
        <div className={styles.headerBlock}>
            <LogoAndMode />
            <Menu />
        </div>
    </header>
);

export default Header;
