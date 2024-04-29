import styles from '@/App.module.css';
import About from '@/components/About/About.tsx';
import Footer from '@/components/Footer/Footer.tsx';
import Header from '@/components/Header/Header.tsx';

function App() {
    return (
        <>
            <div className={styles.wrapper}>
                <Header />
                <About />
                <Footer />
            </div>
        </>
    );
}

export default App;
