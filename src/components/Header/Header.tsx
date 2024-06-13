import type { FC } from 'react';

import { BurgerIcon } from '@/assets/icons/BurgerIcon.tsx';
import { CartIcon } from '@/assets/icons/CartIcon.tsx';
import { LoginIcon } from '@/assets/icons/LoginIcon.tsx';
import { LogoIcon } from '@/assets/icons/LogoIcon.tsx';
import { MoonIcon } from '@/assets/icons/Moon.tsx';
import { SignUpIcon } from '@/assets/icons/SignUpIcon.tsx';
import { SunIcon } from '@/assets/icons/Sun.tsx';
import type { ActivePage } from '@/types/state.ts';

import styles from './Header.module.css';

interface HeaderProps {
    handleActivePage: (page: ActivePage) => void;
    activePage: ActivePage;
    totalCart: number;
    handleTheme: (mode: string) => void;
    isTheme: string | boolean;
}

const Header: FC<HeaderProps> = ({ handleActivePage, activePage, totalCart, handleTheme, isTheme }) => (
    <header className={styles.headerWrapper}>
        <div className={styles.headerContainer}>
            <div className={styles.leftHeader}>
                <div>
                    <LogoIcon />
                </div>
                <div className={styles.themeWrapper}>
                    <button className={styles.themeButton} onClick={() => handleTheme('light')}>
                        <SunIcon theme={isTheme} />
                    </button>

                    <div className={styles.pipe}></div>

                    <button className={styles.themeButton} onClick={() => handleTheme('dark')}>
                        <MoonIcon theme={isTheme} />
                    </button>
                </div>
            </div>
            <div className={styles.rightHeader}>
                <div className={styles.pages}>
                    <button
                        className={activePage === 'about' ? styles.activeButton : styles.defaultLink}
                        onClick={() => handleActivePage('about')}
                    >
                        About
                    </button>
                    <button
                        className={activePage === 'products' ? styles.activeButton : styles.defaultLink}
                        onClick={() => handleActivePage('products')}
                    >
                        Products
                    </button>
                </div>

                <div className={styles.menuSide}>
                    <button className={styles.cartButton}>
                        <CartIcon color={'white'} />
                        {totalCart > 0 && <div className={styles.counter}>{totalCart}</div>}
                    </button>
                    <button className={styles.burgerButton}>
                        <BurgerIcon />
                    </button>
                    <div className={styles.authWrapper}>
                        <button className={styles.authButton}>
                            <LoginIcon /> Login
                        </button>
                        <button className={styles.signUpButton}>
                            <SignUpIcon /> Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
