// Type
import { StaticImageData } from "next/image";

interface Card {
    id: number;
    date: string;
    title: string;
    subtitle_row1: string;
    subtitle_row2: string;
    src: StaticImageData;
}

// Icons
import UtnIcon from '../../../../public/icons/utnIcon.svg';
import PlatziIcon from '../../../../public/icons/utnIcon.svg';
import UdemiIcon from '../../../../public/icons/utnIcon.svg';

export const cards: Card[] = [
    {
        id: 1,
        date: "CARD_1.DATE",
        title: "CARD_1.TITLE",
        subtitle_row1: "CARD_1.SUBTITLE_ROW1",
        subtitle_row2: "CARD_1.SUBTITLE_ROW2",
        src: UtnIcon,
    },
    {
        id: 2,
        date: "CARD_2.DATE",
        title: "CARD_2.TITLE",
        subtitle_row1: "CARD_2.SUBTITLE_ROW1",
        subtitle_row2: "CARD_2.SUBTITLE_ROW2",
        src: PlatziIcon,
    },
    {
        id: 3,
        date: "CARD_3.DATE",
        title: "CARD_3.TITLE",
        subtitle_row1: "CARD_3.SUBTITLE_ROW1",
        subtitle_row2: "CARD_3.SUBTITLE_ROW2",
        src: UdemiIcon,
    },
    
];