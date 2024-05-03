import type { FC } from 'react';

interface Icon {
    key: number;
    url: string;
    img: string;
    altName: string;
}

export const SocialIcon: FC<Icon> = (props) => (
    <li>
        <a href={props.url} key={props.key}>
            <img src={props.img} alt={props.altName} />
        </a>
    </li>
);
