import styles from '@/components/SocialIcon/SocialIcon.module.css';
import facebookIcon from '@/img/social/facebookIcon.svg';
import instagramIcon from '@/img/social/instagramIcon.svg';
import linkedinIcon from '@/img/social/linkedinIcon.svg';

const SocialIcon = () => {
    const FACEBOOK_URL = 'https://www.facebook.com/david.tereshchenko.77/';
    const LINKEDIN_URL = 'https://www.linkedin.com/in/david-tereshchenko-7bb98b240/';
    const INSTAGRAM_URL = 'https://www.instagram.com/davidushka_te/';

    return (
        <div className={styles.socialIcon}>
            <a href={FACEBOOK_URL}>
                <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href={LINKEDIN_URL}>
                <img src={linkedinIcon} alt="Linkedin" />
            </a>
            <a href={INSTAGRAM_URL}>
                <img src={instagramIcon} alt="Instagram" />
            </a>
        </div>
    );
};

export default SocialIcon;
