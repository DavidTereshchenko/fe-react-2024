import { useState } from 'react';

import styles from '@/App.module.css';
import About from '@/components/About/About.tsx';
import FooterComponent from '@/components/Footer/Footer.component.tsx';
import Header from '@/components/Header/Header.tsx';
import { ProductsList } from '@/components/ProductsList/ProductsList.tsx';

interface BasketItem {
    id: number;
    quantity: number;
    length?: number;
}

function App() {
    const [isOpenTab, setIsOpenTab] = useState(true);

    const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
    const [productQuantities, setProductQuantities] = useState<Record<number, number>>([]);

    const addToBasket = (productId: number) => {
        const existingBasket = JSON.parse(localStorage.getItem('basket') || '[]');
        const currentQuantity = productQuantities[productId] || 1;

        const itemExists = existingBasket.find((item: { id: number }) => item.id === productId);

        if (itemExists) {
            const updatedBasket = existingBasket.map((item: { id: number; quantity: number }) => {
                if (item.id === productId) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

            setBasketItems(itemExists);
            localStorage.setItem('basket', JSON.stringify(updatedBasket));
            setProductQuantities({ ...productQuantities, [productId]: currentQuantity + 1 });
        } else {
            const newBasketItem = { id: productId, quantity: 1 };
            setBasketItems([...existingBasket, newBasketItem]);
            localStorage.setItem('basket', JSON.stringify([...existingBasket, newBasketItem]));
        }
    };

    const toggleTabScreen = () => {
        setIsOpenTab(!isOpenTab);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <Header openTabScreen={toggleTabScreen} basketCount={basketItems.length} />
                {!isOpenTab && <About />}
                {isOpenTab && <ProductsList addLocalStore={addToBasket} quantity={productQuantities} />}
                <FooterComponent />
            </div>
        </>
    );
}

export default App;
