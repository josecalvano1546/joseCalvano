// Styles
import { AnimatedDiv, ImageContainer, SocialImage } from "./styles";

// Types
import type { SocialButtons } from "../../types/SocialButtons";

const SocialsButton = ({ src, alt, href, transform, background }: SocialButtons) => {
    return (
        <ImageContainer href={href} className='imgContainer' transform={transform}>
            <SocialImage
                layout="fill"
                alt={alt}
                src={src}
            />
            <AnimatedDiv background={background} />
        </ImageContainer>
    )
}
export default SocialsButton;