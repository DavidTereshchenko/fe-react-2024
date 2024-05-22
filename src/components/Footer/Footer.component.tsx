import styles from '@/components/Footer/Footer.module.css';
import { SocialIcons } from '@/components/SocialIcons/SocialIcons.tsx';

const FooterComponent = () => (
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
            <SocialIcons />
            <p className={styles.footerText}>
                Made with 💗 on course{' '}
                <a href="https://www.mastersacademy.education/frontend-react-it" className={styles.course}>
                    &apos;Intro to React&apos; from Masters Academy in 2024
                </a>
                , by David
            </p>
        </div>
    </footer>
);

export default FooterComponent;
