import { socialNetworksData } from '@/components/constans/socialNetworksData.ts';
import styles from '@/components/SocialIcons/SocialIcons.module.css';
import { SocialNetworkIcon } from '@/components/SocialNetworkIcon/SocialNetworkIcon.tsx';

export const SocialIcons = () => (
    <ul className={styles.socialIcons}>
        {socialNetworksData.map((social, index) => (
            <SocialNetworkIcon key={index} url={social.url} img={social.img} altName={social.altName} />
        ))}
    </ul>
);
