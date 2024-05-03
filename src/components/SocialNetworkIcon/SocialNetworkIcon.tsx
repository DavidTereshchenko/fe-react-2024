import type { FC } from 'react';

interface Icon {
    url: string;
    img: string;
    altName: string;
}

export const SocialNetworkIcon: FC<Icon> = (props) => (
    <li>
        <a href={props.url}>
            <img src={props.img} alt={props.altName} />
        </a>
    </li>
);
