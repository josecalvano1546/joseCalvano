// Styles
import { AnimatedDiv, ImageContainer, SocialImage } from "./styles";

// Types
import type { SocialButtons } from "../../types/SocialButtons";

const SocialsButton = ({ src, alt, href }: SocialButtons) => {
    return (
        <ImageContainer href={href} className='imgContainer'>
            <SocialImage
                layout="fill"
                alt={alt}
                src={src}
            />
            <AnimatedDiv />
        </ImageContainer>
    )
}
export default SocialsButton;