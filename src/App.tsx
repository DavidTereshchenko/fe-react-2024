import { Route, Routes } from 'react-router-dom';

import styles from '@/App.module.css';
import About from '@/components/About/About.tsx';
import FooterComponent from '@/components/Footer/Footer.component.tsx';
import Header from '@/components/Header/Header.tsx';
import { ProductsList } from '@/components/ProductsList/ProductsList.tsx';

function App() {
    const URL_ROUTE = '/fe-react-2024';

    return (
        <>
            <div className={styles.wrapper}>
                <Header route={URL_ROUTE} />
                <Routes>
                    <Route element={<About />} path={URL_ROUTE}></Route>
                    <Route element={<About />} path={`${URL_ROUTE}/about`} />
                    <Route element={<ProductsList />} path={`${URL_ROUTE}/productsList`} />
                </Routes>
                <FooterComponent />
            </div>
        </>
    );
}

export default App;
