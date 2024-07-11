"use client";

// NextJS
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

// Fonts
import fonts from "../../../../public/fonts";

// Styles
import { BackgroundImage, BlurContainer, CircleContainer, EducationCardContainer, ImageContainer, InformationContainer, LavaBackground, MyIcon, SectionContainer, SectionTitleContainer, Title, TitleContainer, TitleLine } from "./styles";

// Assets
import bg from '/public/background/educationBackground.webp';
import { ArrowRight } from "../../../../public/icons/Icons";
import PhotoIcon from '../../../../public/icons/computerMe.webp';

// Components
import TitleDescription from "@/components/titleDescription";
import CircleButton from "@/components/circleButton";
import EducationCard from "@/components/educationCard";

// Data
import { cards } from "./data";

const EducationSection = () => {
    const { t } = useTranslation("EDUCATION");

    const lavaRef = useRef(null);

    useEffect(() => {
        gsap.to(lavaRef.current, {
            duration: 10,
            x: "-200%",
            y: "280%",
            backgroundPosition: "200% 200%",
            repeat: -1,
            yoyo: true,
            ease: "linear",
        });
    }, []);

    const listRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (listRef.current) {
            listRef.current.scrollBy({ top: -231, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (listRef.current) {
            listRef.current.scrollBy({ top: 231, behavior: 'smooth' });
        }
    };

    return (
        <SectionContainer className={fonts().className}>
            <LavaBackground ref={lavaRef} />
            <BackgroundImage
                objectFit="contain"
                alt="water_portrait"
                src={bg}
            />
            <TitleContainer>
                <TitleDescription description={t("SECTION_NAME")} color="black" />
            </TitleContainer>

            <SectionTitleContainer>
                <TitleLine >
                    <Title className="title"> {t("SECTION_TITLE")} </Title>
                </TitleLine>
            </SectionTitleContainer>

            <InformationContainer>
                <CircleContainer>
                    <CircleButton src={ArrowRight('black')} srcAlt={ArrowRight('black')} alt="Left Button" height={8} width={21} direction="up" onClick={scrollLeft} borderColor={'black'} />
                    <CircleButton src={ArrowRight('black')} srcAlt={ArrowRight('black')} alt="Left Button" height={8} width={21} direction="down" onClick={scrollRight} borderColor={'black'} />
                </CircleContainer>

                <BlurContainer>
                    <ImageContainer>
                        <MyIcon src={PhotoIcon} alt='My icon' />
                    </ImageContainer>
                </BlurContainer>

                <EducationCardContainer ref={listRef}>
                    {cards.map((item) => (
                        <EducationCard key={item.id} title={t(item.title)} subtitleRow1={t(item.subtitle_row1)} subtitleRow2={t(item.subtitle_row2)} date={t(item.date)} src={item.src} />
                    ))}
                </EducationCardContainer>
            </InformationContainer>
        </SectionContainer>
    )
}

export default EducationSection