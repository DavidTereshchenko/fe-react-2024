import { ProductCart } from '@/components/ProductCart/ProductCart.tsx';
import styles from '@/components/ProductsList/ProductsList.module.css';
import products from '@/productsList.json';

export const ProductsList = (props: { addLocalStore: (productId: number) => void; quantity: Record<number, number> }) => (
    <main className={styles.productsContainer}>
        {products.map(({ id, title, images, price }) => (
            <ProductCart
                key={id}
                id={id}
                title={title}
                price={price}
                images={images}
                addLocalStore={props.addLocalStore}
                quantity={props.quantity}
            />
        ))}
    </main>
);
