// Styles
import { AnimatedDiv, ArrowIcon, ButtonContainer, ButtonText, IconContainer } from "./styles";

// Assets
import { ArrowRight } from "../../../public/icons/Icons";

// Type
type SocialButtons = {
    description: string;
    href: string;
};

const TextButton = ({ description, href }: SocialButtons) => {
    return (
        <ButtonContainer className="buttonContainer" href={href}>
            <IconContainer>
                <ArrowIcon src={ArrowRight('black')} alt="arrow icon" width={21} height={8} />
            </IconContainer>
            <ButtonText>
                {description}
            </ButtonText>
            <AnimatedDiv />
        </ButtonContainer>
    )
}
export default TextButton;