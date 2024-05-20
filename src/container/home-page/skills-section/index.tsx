"use client"

// NextJS
import { useTranslation } from "react-i18next";

// Types
import { ContainerRef } from "@/types/ContainerRef";

// Styles
import { ButtonsContainer, DescriptionContainer, ElementsContainer, ElementsLeftContainer, ElementsRightContainer, ListSkillContainer, SectionContainer, SkilsContainer, Subtitle, SubtitleContainer, SubtitleContainerMobile, Title, TitleContent } from "./styles";

// Components
import TitleDescription from "@/components/titleDescription";
import CircleButton from "@/components/circleButton";

// Fonts
import fonts from "../../../../public/fonts";

// Assets
import { ArrowLeft, ArrowRight } from "../../../../public/icons/Icons";
import SkillsCard from "@/components/skillsCard";

interface ComponentProps {
    constainerRef?: ContainerRef;
}

const SkillsSection: React.FC<ComponentProps> = ({ constainerRef }) => {

    const { t } = useTranslation("SKILLS");

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
                                <CircleButton src={ArrowRight('white')} srcAlt={ArrowRight('black')} alt="Left Button" height={8} width={21} direction="left"/>
                                <CircleButton src={ArrowRight('white')} srcAlt={ArrowRight('black')} alt="Left Button" height={8} width={21} direction="right"/>
                            </ButtonsContainer>
                        </ElementsRightContainer>
                    </DescriptionContainer>
                    <ListSkillContainer>

                        <SkillsCard/>
                        
                    </ListSkillContainer>
                </ElementsContainer>
            </SkilsContainer>
        </SectionContainer>
    )
}

export default SkillsSection;
