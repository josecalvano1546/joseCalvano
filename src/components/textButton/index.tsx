// Styles
import { AnimatedDiv, ArrowIcon, ButtonContainer, ButtonText, IconContainer } from "./styles";

// Sources
import Arrow from '/public/icons/arrow.svg';

// Type
type SocialButtons = {
    description: string;
    href: string;
};

const TextButton = ({ description, href }: SocialButtons) => {
    return (
        <ButtonContainer className="buttonContainer" href={href}>
            <IconContainer>
                <ArrowIcon src={Arrow} alt="arrow icon" />
            </IconContainer>
            <ButtonText>
                {description}
            </ButtonText>
            <AnimatedDiv />
        </ButtonContainer>
    )
}
export default TextButton;