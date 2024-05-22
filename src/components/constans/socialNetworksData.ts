import facebookIcon from '@/img/social/facebookIcon.svg';
import instagramIcon from '@/img/social/instagramIcon.svg';
import linkedinIcon from '@/img/social/linkedinIcon.svg';
import type { SocialNetwork } from '@/interface/interfaceSocialNetwork.ts';

export const socialNetworksData: SocialNetwork[] = [
    {
        img: `${facebookIcon}`,
        url: 'https://www.facebook.com/david.tereshchenko.77/',
        altName: 'Facebook',
    },
    {
        img: `${linkedinIcon}`,
        url: 'https://www.linkedin.com/in/david-tereshchenko-7bb98b240/',
        altName: 'LinkedIn',
    },
    {
        img: `${instagramIcon}`,
        url: 'https://www.instagram.com/davidushka_te/',
        altName: 'Instagram',
    },
];
