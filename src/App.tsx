import About from '@/components/About/About.tsx';
import Footer from '@/components/footer/Footer.tsx';
import { HeaderComponent } from '@/components/header/Header.component.tsx';

function App() {
    return (
        <>
            <HeaderComponent />
            <About />
            <Footer />
        </>
    );
}

export default App;
