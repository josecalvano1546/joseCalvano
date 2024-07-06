// Styles
import { CardContainer, Date, Description, DescriptionContainer, HeaderContainer, ImageContainer, Title, TitleContainer } from "./styles";

// Fonts
import fonts from "../../../public/fonts";

// Types
export type ExperienceCardType = {
    subtitle: string;
    title: string;
    date: string;
    key: number;
};
  

const ExperienceCard = ({ key, date, title, subtitle}: ExperienceCardType) =>{
    return(
        <CardContainer key={key}>
            <HeaderContainer className={fonts('RubikFont').className}>
                <Date>{date}</Date>
            </HeaderContainer>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <DescriptionContainer className={fonts('RubikFont').className}>
                <Description>{subtitle}</Description>
            </DescriptionContainer>

        </CardContainer>
    )
}

export default ExperienceCard;