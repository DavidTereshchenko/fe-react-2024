import { socialNetworksData } from '@/components/constans/socialNetworksData.ts';
import { SocialIcon } from '@/components/SocialIcon/SocialIcon.tsx';
import styles from '@/components/SocialIcons/SocialIcons.module.css';

export const SocialIcons = () => (
    <ul className={styles.socialIcon}>
        {socialNetworksData.map((social, index) => (
            <SocialIcon key={index} url={social.url} img={social.img} altName={social.altName} />
        ))}
    </ul>
);
