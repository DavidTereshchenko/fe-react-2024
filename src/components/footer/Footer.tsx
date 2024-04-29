import styles from '@/components/Footer/Footer.module.css';
import SocialIcon from '@/components/SocialIcon/SocialIcon.tsx';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
            <SocialIcon />
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

export default Footer;
