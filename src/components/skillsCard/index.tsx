// Styles
import { CardContainer, Description, DescriptionContainer, HeaderContainer, ImageContainer, Title, TitleContainer } from "./styles";

// Assets
import react from '../../../public/icons/react.svg'

// Fonts
import fonts from "../../../public/fonts";


// Types
export type SkillsCardType = {
    subtitle: string;
    title: string;
    key: number;
};
  
const SkillsCard = ({ key, title, subtitle}: SkillsCardType) =>{
    return(
        <CardContainer key={key}>
            <HeaderContainer>
                <ImageContainer src={react} alt="React icon"/>
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

export default SkillsCard;