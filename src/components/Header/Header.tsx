import LogoAndMode from '@/components/LogoAndMode/LogoAndMode.tsx';
import Menu from '@/components/Menu/Menu.tsx';

import styles from './Header.module.css';

// interface HeaderInt {
//     countHeader: number;
// }
const Header = (props: { openTabScreen: () => void; basketCount: number }) => (
    <header className={styles.header}>
        <div className={styles.headerBlock}>
            <LogoAndMode />
            <Menu openTabScreen={props.openTabScreen} basketCount={props.basketCount} />
        </div>
    </header>
);

export default Header;
