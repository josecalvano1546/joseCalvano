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
    onClick: ()=> void;
    borderColor: string;
};

const CircleButton = ({ src, alt, height, width, direction, srcAlt, borderColor, onClick }: CircleButtons) => {
    return (
        <Container className='arrowContainer' onClick={onClick}>
            <ImageContainer direction={direction} borderColor={borderColor}>
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