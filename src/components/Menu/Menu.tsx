import { NavLink } from 'react-router-dom';

import { BasketHeader } from '@/components/BasketHeader/BasketHeader.tsx';
import styles from '@/components/Menu/Menu.module.css';
import login from '@/img/buttons/login.svg';
import singUp from '@/img/buttons/singUp.svg';

const Menu = (props: { routeUrl: string }) => (
    <div className={styles.menu}>
        <nav className={styles.screenTab}>
            <ul className={styles.menuList}>
                <NavLink to={`${props.routeUrl}/about`} className={({ isActive }) => (isActive ? styles.active : null)}>
                    About
                </NavLink>

                <NavLink to={`${props.routeUrl}/productsList`} className={({ isActive }) => (isActive ? styles.active : null)}>
                    Products
                </NavLink>
            </ul>
        </nav>
        <BasketHeader />
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
