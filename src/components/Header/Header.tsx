import LogoAndMode from '@/components/LogoAndMode/LogoAndMode.tsx';
import Menu from '@/components/Menu/Menu.tsx';

import styles from './Header.module.css';
const Header = (props: { route: string }) => (
    <header className={styles.header}>
        <div className={styles.headerBlock}>
            <LogoAndMode routeHome={props.route} />
            <Menu routeUrl={props.route} />
        </div>
    </header>
);

export default Header;
