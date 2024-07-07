// Styles
import { CardContainer, Date, Description, DescriptionContainer, HeaderContainer, ImageContainer, Title, TitleContainer, UniversityIcon, UniversityIconContainer } from "./styles";

// Fonts
import fonts from "../../../public/fonts";

import { StaticImageData } from "next/image";

// Types
export type ExperienceCardType = {
    subtitleRow1: string;
    subtitleRow2: string;
    title: string;
    date: string;
    key: number;
    src: StaticImageData;
};

const EducationCard = ({ key, date, title, subtitleRow1, subtitleRow2, src }: ExperienceCardType) => {
    return (
        <CardContainer key={key}>
            <HeaderContainer className={fonts('RubikFont').className}>
                <Date>{date} </Date>
            </HeaderContainer>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <DescriptionContainer className={fonts('RubikFont').className}>
                <Description>{subtitleRow1}</Description>
            </DescriptionContainer>
            <DescriptionContainer className={fonts('RubikFont').className}>
                <Description>{subtitleRow2}</Description>
            </DescriptionContainer>

            <UniversityIconContainer>
                <UniversityIcon src={src} alt='University icon' />
            </UniversityIconContainer>
        </CardContainer>
    )
}

export default EducationCard;