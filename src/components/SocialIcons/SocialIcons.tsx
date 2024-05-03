import { socialNetworksData } from '@/components/constans/socialNetworksData.ts';
import { SocialIcon } from '@/components/socialIcon/SocialIcon.tsx';
import styles from '@/components/SocialIcons/SocialIcon.module.css';

export const SocialIcons = () => (
    <ul className={styles.socialIcon}>
        {socialNetworksData.map((social, index) => (
            <SocialIcon key={index} img={social.img} url={social.url} altName={social.altName} />
        ))}
    </ul>
);
