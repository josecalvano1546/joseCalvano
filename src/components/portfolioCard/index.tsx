// Styles
import { CardContainer, Description, DescriptionContainer, ImageContainer, ImageIcon, RightContainer, Title, TitleContainer } from "./styles";

// Fonts
import fonts from "../../../public/fonts";

// Types
import { StaticImageData } from "next/image";
export type ExperienceCardType = {
    subtitleRow1: string;
    subtitleRow2: string;
    title: string;
    key: number;
    src: StaticImageData;
};

const PortfolioCard = ({ key, title, subtitleRow1, subtitleRow2, src }: ExperienceCardType) => {
    return (
        <CardContainer key={key}>
            <ImageContainer>
                <ImageIcon src={src} alt='Portfolio Background' />
            </ImageContainer>
            <RightContainer>
                <TitleContainer>
                    <Title>{title}</Title>
                </TitleContainer>
                <DescriptionContainer className={fonts('RubikFont').className}>
                    <Description>{subtitleRow1}</Description>
                    <Description>{subtitleRow2}</Description>
                </DescriptionContainer>
            </RightContainer>
        </CardContainer>
    )
}

export default PortfolioCard;