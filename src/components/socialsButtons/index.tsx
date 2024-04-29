// Styles
import { Effect, ImageContainer, SocialImage } from "./styles";

// Types
import type { SocialButtons } from "../../types/SocialButtons";

const SocialsButton = ({ src, alt }: SocialButtons) => {
    return (
        <ImageContainer>
             <SocialImage
                layout="fill"
                alt={alt}
                src={src}
            />
            <Effect/>
        </ImageContainer>
    )
}
export default SocialsButton;