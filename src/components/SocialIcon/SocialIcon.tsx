import styles from '@/components/SocialIcon/SocialIcon.module.css';
import facebookIcon from '@/img/social/facebookIcon.svg';
import instagramIcon from '@/img/social/instagramIcon.svg';
import linkedinIcon from '@/img/social/linkedinIcon.svg';

const SocialIcon = () => {
    const facebookLink = 'https://www.facebook.com/david.tereshchenko.77/';
    const linkedinLink = 'https://www.linkedin.com/in/david-tereshchenko-7bb98b240/';
    const instagramLink = 'https://www.instagram.com/davidushka_te/';

    return (
        <div className={styles.socialIcon}>
            <a href={facebookLink}>
                <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href={linkedinLink}>
                <img src={linkedinIcon} alt="Linkedin" />
            </a>
            <a href={instagramLink}>
                <img src={instagramIcon} alt="Instagram" />
            </a>
        </div>
    );
};

export default SocialIcon;
