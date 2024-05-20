// Styles
import { AnimatedDiv, ArrowImage, ArrowImageAlt, Container, ImageContainer } from "./styles";

// Types
export type CircleButtons = {
    src: string;
    alt: string;
    srcAlt: string;
    height: number;
    width: number;
    direction: 'up' | 'down' | 'right' | 'left';
};

const CircleButton = ({ src, alt, height, width, direction, srcAlt }: CircleButtons) => {
    return (
        <Container className='arrowContainer'>
            <ImageContainer direction={direction}>
                <ArrowImage
                    alt={alt}
                    src={src}
                    height={height}
                    width={width}
                />
                <AnimatedDiv>
                    <ArrowImageAlt src={srcAlt} alt={alt} height={height}
                        width={width} />
                </AnimatedDiv>
            </ImageContainer>
        </Container>
    )
}
export default CircleButton;