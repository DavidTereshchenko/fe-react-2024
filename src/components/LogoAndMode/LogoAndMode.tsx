import styles from '@/components/LogoAndMode/LogoAndMode.module.css';
import logo from '@/img/logo.svg';
import divider from '@/img/mode/divider.svg';
import moon from '@/img/mode/moon.svg';
import sun from '@/img/mode/sun.svg';
import sunBlack from '@/img/mode/sunBlack.svg';

const LogoAndMode = () => (
    <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <div className={styles.lightMode}>
            <img src={sun} alt="white sun" className={styles.whiteSun} />
            <img src={sunBlack} alt="sun" className={styles.sun} />
            <img src={divider} alt="divider" />
            <img src={moon} alt="moon" />
        </div>
    </div>
);

export default LogoAndMode;
