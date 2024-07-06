"use client";

// Components
import TitleDescription from "@/components/titleDescription";
import ExperienceCard from "@/components/experienceCard";

// Styles
import { CardExperienceContainer, Description, ExperienceContainer, SectionContainer, SubtitleContainer, Title, TitleContainer, TitleLine } from "./styles";

// Utils
import { useTranslation } from "react-i18next";
import fonts from "../../../../public/fonts";
import { cards } from "./data";

const AboutSection = () =>{
    const { t } = useTranslation("ABOUT");
    const rubikClass = fonts('RubikFont').className;
    const classes = `${rubikClass} highlight title`;

    return(
        <SectionContainer className={fonts().className}>
            <div style={{display:"flex", width:"100%", justifyContent:"flex-end", paddingRight:'2.5%'}}>
                <TitleDescription description={t("SECTION_NAME")} color="black"/>
            </div>
           
            <TitleContainer>
                    <TitleLine >
                        <Title className="title"> {t("GRETING")} </Title>
                        <Title className="highlight title"> {t("PROFESION")} </Title>
                    </TitleLine>
                    <TitleLine>
                        <Title className="title" > {t("SECTION_TITLE_FIRST_PART")} </Title>
                        <Title className={classes}> {t("SECTION_TITLE_SECOND_PART")} </Title>
                    </TitleLine>
            </TitleContainer>

            <SubtitleContainer className={fonts('RubikFont').className}>
                <Description>{t("SUBTITLE")} </Description>
            </SubtitleContainer>
            
            <ExperienceContainer>
                <TitleDescription description={t("SUB_SECTION")} color="white" />
                <TitleLine >
                    <Title className="highlight title subsection"> {t("SUB_SECTION_TITLE")} </Title>
                </TitleLine>
                <CardExperienceContainer>
                    {cards.map((item) => (
                        <ExperienceCard key={item.id} title={t(item.title)} subtitle={t(item.subtitle)} date={t(item.date)} />
                    ))}
                </CardExperienceContainer>
            </ExperienceContainer>
          
        </SectionContainer>
    )
};

export default AboutSection