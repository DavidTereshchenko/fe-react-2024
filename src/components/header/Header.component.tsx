import login from '@/img/buttons/Interface/Log_Out.svg';
import singUp from '@/img/buttons/User/User_Add.svg';
import basket from '@/img/cart.svg';
import Logo from '@/img/logo.svg';
import divider from '@/img/mode/divider.svg';
import moon from '@/img/mode/moon.svg';
import whiteSun from '@/img/mode/sun.svg';
import sun from '@/img/mode/sun-black.svg';

import styles from './header.module.css';
export const HeaderComponent = () => (
    <header className={styles.header}>
        <div className={styles.headerBlock}>
            <div className={styles.logo}>
                <img src={Logo} alt="logo" />
                <div className={styles.lightMode}>
                    <img src={whiteSun} alt="white sun" className={styles.whiteSun} />
                    <img src={sun} alt="sun" className={styles.sun} />
                    <img src={divider} alt="divider" />
                    <img src={moon} alt="moon" />
                </div>
            </div>
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
        </div>
    </header>
);
