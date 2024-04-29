"use client";

// NextJS
import { useTranslation } from "react-i18next";

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


const HomeSection = () => {
    const { t } = useTranslation("HOME");

    return (
        <SectionContainer className={fonts().className}>
            <BackgroundImage
                layout="fill"
                alt="water_portrait"
                src={bg}
            />
            <PresentationContainer>
                <TitleContainer>
                    <TitleLine>
                        <Title> {t("GRETING")} </Title>
                        <Title className={'highlight'}> {t("NAME")} </Title>
                    </TitleLine>
                    <TitleLine>
                        <Title className={'highlight'}> {t("PROFESION_FIRST_PART")} </Title>
                        <Title> {t("PROFESION_SECOND_PART")} </Title>
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