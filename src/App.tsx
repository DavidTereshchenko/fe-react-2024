import { useEffect, useState } from 'react';

import styles from '@/App.module.css';
import FooterComponent from '@/components/Footer/Footer.component.tsx';
import Header from '@/components/Header/Header.tsx';
import About from '@/screens/About/About.tsx';
import { ProductsList } from '@/screens/ProductsList/ProductsList.tsx';
import type { ActivePage } from '@/types/state.ts';
import { getCartTotalAmount } from '@/utils/getCartTotalAmount.ts';

function App() {
    const [activePage, setActivePage] = useState<ActivePage>('about');
    const [totalCart, setTotalCart] = useState<number>(0);

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

    return (
        <>
            <div className={styles.container}>
                <Header activePage={activePage} handleActivePage={handleActivePage} totalCart={totalCart} />
                {activePage === 'about' ? <About /> : <ProductsList updateTotalCart={updateTotalCart} />}
                <FooterComponent />
            </div>
        </>
    );
}

export default App;
