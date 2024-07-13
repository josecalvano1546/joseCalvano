// Type
import { StaticImageData } from "next/image";

interface Card {
    id: number;
    title: string;
    subtitle_row1: string;
    subtitle_row2: string;
    src: StaticImageData;
}

// Icons
import Liteflix from '../../../../public/portfolioBg/Liteflix.webp';
import PorVos from '../../../../public/portfolioBg/PorVos.webp';
import SurfProject from '../../../../public/portfolioBg/SurfProject.webp';
import Booking from '../../../../public/portfolioBg/Booking.webp';

export const cards: Card[] = [
    {
        id: 1,
        title: "CARD_1.TITLE",
        subtitle_row1: "CARD_1.SUBTITLE_ROW1",
        subtitle_row2: "CARD_1.SUBTITLE_ROW2",
        src: Liteflix,
    },
    {
        id: 2,
        title: "CARD_2.TITLE",
        subtitle_row1: "CARD_2.SUBTITLE_ROW1",
        subtitle_row2: "CARD_2.SUBTITLE_ROW2",
        src: PorVos,
    },
    {
        id: 3,
        title: "CARD_3.TITLE",
        subtitle_row1: "CARD_3.SUBTITLE_ROW1",
        subtitle_row2: "CARD_3.SUBTITLE_ROW2",
        src: SurfProject,
    },
    {
        id: 4,
        title: "CARD_4.TITLE",
        subtitle_row1: "CARD_4.SUBTITLE_ROW1",
        subtitle_row2: "CARD_4.SUBTITLE_ROW2",
        src: Booking,
    },
    
];