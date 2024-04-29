import styles from '@/App.module.css';
import About from '@/components/About/About.tsx';
import Footer from '@/components/Footer/Footer.tsx';
import HeaderComponent from '@/components/Header/Header.component.tsx';

function App() {
    return (
        <>
            <div className={styles.wrapper}>
                <HeaderComponent />
                <About />
                <Footer />
            </div>
        </>
    );
}

export default App;
