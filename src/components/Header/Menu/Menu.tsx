import styles from '@/components/Header/Menu/Menu.module.css';
import login from '@/img/buttons/login.svg';
import singUp from '@/img/buttons/singUp.svg';
import basket from '@/img/cart.svg';

const Menu = () => (
    <div className={styles.menu}>
        <nav className={styles.screenTab}>
            <ul className={styles.menuList}>
                <li>About</li>
                <li>Product</li>
                <li className={styles.account}>Your Account</li>
            </ul>
        </nav>
        <img src={basket} alt="basket" className={styles.basket} />
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
