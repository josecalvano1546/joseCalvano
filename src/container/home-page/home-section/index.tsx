"use client";

// NextJS
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Styles
import { BackgroundImage, ButtonCV, PresentationContainer, SectionContainer, SocialButtons, SocialContainer, SocialText, SocialsButtonsContainers, Subtitle, SubtitleCV, SubtitleContainer, SubtitleMobileContainer, Title, TitleContainer, TitleLine } from "./styles";

// Components
import SocialsButtons from "@/components/socialsButtons";

// Assets
import bg from '/public/homeBackground.png';
import Facebook from '/public/icons/facebook.png';
import Instagram from '/public/icons/instagram.png';
import Linkeding from '/public/icons/linkedin.png';

// Fonts
import fonts from "../../../../public/fonts";

// Types
import { ContainerRef } from "@/types/ContainerRef";

interface ComponentProps {
    constainerRef: ContainerRef;
}


const HomeSection: React.FC<ComponentProps> = ({ constainerRef }) => {

    const { t } = useTranslation("HOME");

    useGSAP(() => {
        const t1 = gsap.timeline();

        t1.from(".title", {
            y: 200,
            ease: "power4.out",
            delay: 0.2,
            duration: 1.8,
            stagger: {
                amount: 0.4,
            },
        });
    }, { scope: constainerRef });


    return (
        <SectionContainer className={fonts().className} ref={constainerRef}>
            <BackgroundImage
                layout="fill"
                alt="water_portrait"
                src={bg}
            />
            <PresentationContainer>
                <TitleContainer>
                    <TitleLine >
                        <Title className={'title'}> {t("GRETING")} </Title>
                        <Title className={'highlight title'}> {t("NAME")} </Title>
                    </TitleLine>
                    <TitleLine>
                        <Title className={'highlight title'}> {t("PROFESION_FIRST_PART")} </Title>
                        <Title className={'title'}> {t("PROFESION_SECOND_PART")} </Title>
                    </TitleLine>
                </TitleContainer>
                <SubtitleMobileContainer>
                    <Subtitle> {t("DESCRIPTION_SUBTITLE")}</Subtitle>
                </SubtitleMobileContainer>
            </PresentationContainer>

            <SocialContainer>
                <SocialButtons>
                    <SocialText>
                        <Subtitle> @jose_calvano</Subtitle>
                    </SocialText>
                    <SocialsButtonsContainers>
                        <SocialsButtons src={Linkeding} alt="linkeding icon" />
                        <SocialsButtons src={Instagram} alt="instagram icon" />
                        <SocialsButtons src={Facebook} alt="facebook icon" />
                    </SocialsButtonsContainers>
                </SocialButtons>
                <SubtitleCV>
                    <SubtitleContainer>
                        <Subtitle> {t("DESCRIPTION_SUBTITLE")}</Subtitle>
                    </SubtitleContainer>
                    <ButtonCV>

                    </ButtonCV>
                </SubtitleCV>
            </SocialContainer>
        </SectionContainer>
    )
}

export default HomeSection