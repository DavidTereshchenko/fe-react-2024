import styles from '@/App.module.css';
import About from '@/components/About/About.tsx';
import FooterComponent from '@/components/Footer/Footer.component.tsx';
import Header from '@/components/Header/Header.tsx';

function App() {
    return (
        <>
            <div className={styles.wrapper}>
                <Header />
                <About />
                <FooterComponent />
            </div>
        </>
    );
}

export default App;
