import styles from '@/components/socialIcon/SocialIcon.module.css';
import facebook from '@/img/mode/face.svg';
import instagram from '@/img/social/Subtract.svg';
import linkedin from '@/img/social/Vector.svg';

const SocialIcon = (props: { links: { facebook: string | undefined; linkedin: string | undefined; instagram: string | undefined } }) => (
    <div className={styles.socialIcon}>
        <a href={props.links.facebook}>
            <img src={facebook} alt="facebook" />
        </a>
        <a href={props.links.linkedin}>
            <img src={linkedin} alt="Linkedin" />
        </a>
        <a href={props.links.instagram}>
            <img src={instagram} alt="Instagram" />
        </a>
    </div>
);

export default SocialIcon;
