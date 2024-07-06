// Styles
import { AnimatedDiv, ArrowIcon, CircleContainer, Description, DescriptionContainer, MyIcon, TitleDescriptionContainer } from "./style";

// Assets
import { ArrowDown } from "../../../public/icons/Icons";
import PhotoIcon from '../../../public/icons/sectionImg.jpeg';

interface MyComponentProps {
    description: string;
    color: string;
}

const TitleDescription: React.FC<MyComponentProps> = ({ description, color }) => {

    return (
        <TitleDescriptionContainer>
            <CircleContainer className='circleContainer' $color={color}>
                <ArrowIcon src={ArrowDown(color)} alt='Arrow'  width={8} height={21}/>
                <AnimatedDiv>
                    <MyIcon src={PhotoIcon} alt='My icon'/>
                </AnimatedDiv>
            </CircleContainer>
            <DescriptionContainer $color={color}>
                <Description $color={color}>{description}</Description>
            </DescriptionContainer>
        </TitleDescriptionContainer>
    )
};

export default TitleDescription;