import { Fragment, useEffect, useState } from 'react';

import useLocalStorage from 'use-local-storage';

import styles from '@/App.module.css';
import FooterComponent from '@/components/Footer/Footer.component.tsx';
import Header from '@/components/Header/Header.tsx';
import About from '@/screens/About/About.tsx';
import { ProductsList } from '@/screens/ProductsList/ProductsList.tsx';
import type { ActivePage } from '@/types/state.ts';
import { getCartTotalAmount } from '@/utils/getCartTotalAmount.ts';

function App() {
    const isPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [activePage, setActivePage] = useState<ActivePage>('about');
    const [totalCart, setTotalCart] = useState<number>(0);
    const [isTheme, setIsTheme] = useLocalStorage('light', isPreference);

    useEffect(() => {
        const total = getCartTotalAmount();
        setTotalCart(total);
    }, []);

    const handleActivePage = (page: ActivePage) => {
        setActivePage(page);
    };

    const updateTotalCart = () => {
        const total = getCartTotalAmount();
        setTotalCart(total);
    };
    const handleTheme = (mode: string) => {
        const newTheme = isTheme ? mode : 'dark';
        setIsTheme(newTheme);
    };

    return (
        <>
            <div className={styles.container} data-theme={isTheme}>
                <div className={styles.wrapper}>
                    <Header
                        activePage={activePage}
                        changeColorIcon={isTheme}
                        handleTheme={handleTheme}
                        handleActivePage={handleActivePage}
                        totalCart={totalCart}
                    />
                    {activePage === 'about' ? <About /> : <ProductsList updateTotalCart={updateTotalCart} />}
                    <FooterComponent />
                </div>
            </div>
        </>
    );
}

export default App;
