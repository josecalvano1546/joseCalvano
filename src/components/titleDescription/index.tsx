// Styles
import { AnimatedDiv, ArrowIcon, CircleContainer, Description, DescriptionContainer, MyIcon, TitleDescriptionContainer } from "./style";

// Assets
import { ArrowDown } from "../../../public/icons/Icons";
import PhotoIcon from '../../../public/icons/sectionImg.jpeg';

interface MyComponentProps {
    description: string;
}

const TitleDescription: React.FC<MyComponentProps> = ({ description }) => {

    return (
        <TitleDescriptionContainer>
            <CircleContainer className='circleContainer'>
                <ArrowIcon src={ArrowDown('white')} alt='Arrow'  width={8} height={21}/>
                <AnimatedDiv>
                    <MyIcon src={PhotoIcon} alt='My icon'/>
                </AnimatedDiv>
            </CircleContainer>
            <DescriptionContainer>
                <Description>{description}</Description>
            </DescriptionContainer>
        </TitleDescriptionContainer>
    )
};

export default TitleDescription;