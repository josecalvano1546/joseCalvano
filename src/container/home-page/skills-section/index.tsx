"use client"

// NextJS
import { useRef } from "react";
import { useTranslation } from "react-i18next";

// Types
import { ContainerRef } from "@/types/ContainerRef";

// Styles
import { BlurEffectLeft, BlurEffectRight, ButtonsContainer, DescriptionContainer, ElementsContainer, ElementsLeftContainer, ElementsRightContainer, ListSkillContainer, SectionContainer, SkillsContainer, SkilsContainer, Subtitle, SubtitleContainer, SubtitleContainerMobile, Title, TitleContent } from "./styles";

// Components
import TitleDescription from "@/components/titleDescription";
import CircleButton from "@/components/circleButton";

// Fonts
import fonts from "../../../../public/fonts";

// Assets
import { ArrowLeft, ArrowRight } from "../../../../public/icons/Icons";
import SkillsCard from "@/components/skillsCard";
import { cards } from "./data";

interface ComponentProps {
    constainerRef?: ContainerRef;
}

const SkillsSection: React.FC<ComponentProps> = ({ constainerRef }) => {

    const { t } = useTranslation("SKILLS");

    const listRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (listRef.current) {
        listRef.current.scrollBy({ left: -370, behavior: 'smooth' });
        }
    };
      
    const scrollRight = () => {
        if (listRef.current) {
        listRef.current.scrollBy({ left: 370, behavior: 'smooth' });
        }
    };

    return (
        <SectionContainer className={fonts().className} >
            <SkilsContainer>
                <ElementsContainer>
                    <DescriptionContainer>
                        <ElementsLeftContainer>
                            <TitleDescription description={t("SECTION_NAME")} />
                            <TitleContent>
                                <Title>
                                    {t("TITLE_FIRST_PART")}
                                </Title>
                                <Title>
                                    {t("TITLE_SECOND_PART")}
                                </Title>
                            </TitleContent>

                            <SubtitleContainerMobile className={fonts('RubikFont').className}>
                                <Subtitle>{t("SUBTITLE")}</Subtitle>
                            </SubtitleContainerMobile>

                        </ElementsLeftContainer>

                        <ElementsRightContainer>
                            <SubtitleContainer className={fonts('RubikFont').className}>
                                <Subtitle>{t("SUBTITLE")}</Subtitle>
                            </SubtitleContainer>
                            <ButtonsContainer>
                                <CircleButton src={ArrowRight('white')} srcAlt={ArrowRight('black')} alt="Left Button" height={8} width={21} direction="left" onClick={scrollLeft}/>
                                <CircleButton src={ArrowRight('white')} srcAlt={ArrowRight('black')} alt="Left Button" height={8} width={21} direction="right" onClick={scrollRight}/>
                            </ButtonsContainer>
                        </ElementsRightContainer>
                    </DescriptionContainer>
                   
                    <ListSkillContainer >
                    <BlurEffectLeft/>
                    <SkillsContainer className="cardContainer" ref={listRef}>

                        {cards.map((item) => (
                            <SkillsCard key={item.id} title={t(item.title)} subtitle={t(item.subtitle)} />
                        ))}
                       
                    </SkillsContainer>
                        <BlurEffectRight/>
                    </ListSkillContainer>
                </ElementsContainer>
            </SkilsContainer>
        </SectionContainer>
    )
}

export default SkillsSection;
