import { BasketHeader } from '@/components/BasketHeader/BasketHeader.tsx';
import styles from '@/components/Menu/Menu.module.css';
import login from '@/img/buttons/login.svg';
import singUp from '@/img/buttons/singUp.svg';

const Menu = (props: { openTabScreen: () => void; basketCount: number }) => (
    <div className={styles.menu}>
        <nav className={styles.screenTab}>
            <ul className={styles.menuList}>
                <li onClick={props.openTabScreen}>About</li>

                <li onClick={props.openTabScreen}>Products</li>
            </ul>
        </nav>
        <BasketHeader basketCount={props.basketCount} />
        <div className={styles.accountButtons}>
            <button className={styles.loginButton}>
                <img src={login} alt="login" />
                Login
            </button>
            <button className={styles.singUpButton}>
                <img src={singUp} alt="sing up" />
                Sing up
            </button>
        </div>
        <div className={styles.burger}></div>
    </div>
);

export default Menu;
