"use client";

// NextJS
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Styles
import { BackgroundImage, ButtonCV, PresentationContainer, SectionContainer, SocialButtons, SocialContainer, SocialText, SocialsButtonsContainers, Subtitle, SubtitleCV, SubtitleContainer, SubtitleMobileContainer, Title, TitleContainer, TitleLine } from "./styles";

// Components
import SocialsButton from "@/components/socialsButton";
import TextButton from "@/components/textButton";

// Assets
import bg from '/public/homeBackground.png';
import Github from '/public/icons/github.png';
import Instagram from '/public/icons/instagram.png';
import Linkeding from '/public/icons/linkedin.png';

// Fonts
import fonts from "../../../../public/fonts";

// Types
import { ContainerRef } from "@/types/ContainerRef";

interface ComponentProps {
    constainerRef?: ContainerRef;
}

const HomeSection: React.FC<ComponentProps> = ({ constainerRef }) => {

    const { t } = useTranslation("HOME");

    useGSAP(() => {
        const t1 = gsap.timeline({repeatDelay: 1});

        t1.from(".title", {
            y: 200,
            ease: "power4.out",
            delay: 0.2,
            duration: 1.8,
            stagger: {
                amount: 0.4,
            },
        });

        t1.from(".imgContainer", {
            scale: 0,
            duration: 1,
            delay: 0.2,
            ease: "power2.inOut",
            stagger: {
                amount: 0.4,
            },
        }, "<0.5");

        t1.from(".secondaryElements", {
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power2.inOut",
            stagger: {
                amount: 0.4,
            },
        }, "<-0.5");
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
                        <Title className="title"> {t("GRETING")} </Title>
                        <Title className="highlight title"> {t("NAME")} </Title>
                    </TitleLine>
                    <TitleLine>
                        <Title className="highlight title"> {t("PROFESION_FIRST_PART")} </Title>
                        <Title className="title"> {t("PROFESION_SECOND_PART")} </Title>
                    </TitleLine>
                </TitleContainer>
                <SubtitleMobileContainer>
                    <Subtitle className="secondaryElements"> {t("DESCRIPTION_SUBTITLE")}</Subtitle>
                </SubtitleMobileContainer>
            </PresentationContainer>

            <SocialContainer>
                <SocialButtons>
                    <SocialText>
                        <Subtitle className="secondaryElements"> @jose_calvano </Subtitle>
                    </SocialText>
                    <SocialsButtonsContainers>
                        <SocialsButton href="https://www.linkedin.com/in/josecalvano/" src={Linkeding} alt="linkeding icon" />
                        <SocialsButton href="https://www.instagram.com/jose_calvano/" src={Instagram} alt="instagram icon" />
                        <SocialsButton href="https://github.com/josecalvano1546" src={Github} alt="github icon" />
                    </SocialsButtonsContainers>
                </SocialButtons>
                <SubtitleCV>
                    <SubtitleContainer>
                        <Subtitle className="secondaryElements"> {t("DESCRIPTION_SUBTITLE")}</Subtitle>
                    </SubtitleContainer>
                    <ButtonCV className="secondaryElements">
                        <TextButton description={t("BUTTON_DESCRIPTION")} href="/cv/joseCalvanoCV.pdf"/>
                    </ButtonCV>
                </SubtitleCV>
            </SocialContainer>
        </SectionContainer>
    )
}

export default HomeSection