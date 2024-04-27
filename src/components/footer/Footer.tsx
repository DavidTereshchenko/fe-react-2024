import styles from '@/components/footer/Footer.module.css';
import SocialIcon from '@/components/socialIcon/SocialIcon.tsx';

const Footer = () => {
    const linksSocial = {
        facebook: 'https://www.facebook.com/david.tereshchenko.77/',
        linkedin: 'https://www.linkedin.com/in/david-tereshchenko-7bb98b240/',
        instagram: 'https://www.instagram.com/davidushka_te/',
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <SocialIcon links={linksSocial} />
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
};

export default Footer;
