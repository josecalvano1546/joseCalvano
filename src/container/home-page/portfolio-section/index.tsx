"use client";

// NextJS 
import { useTranslation } from "react-i18next";

// Styles
import { CardExperienceContainer, PortfolioContainer, SectionContainer, Title, TitleContent } from "./styles";

// Utils
import fonts from "../../../../public/fonts";
import { cards } from "./data";

// Components
import TitleDescription from "@/components/titleDescription";
import PortfolioCard from "@/components/portfolioCard";



const PortfolioSection = () => {
    const { t } = useTranslation("PORTFOLIO");
 return(
    <SectionContainer id="portfolio" className={fonts().className}>
          <PortfolioContainer>
            <TitleDescription description={t("SECTION_NAME")} color="white" />
                <TitleContent>
                    <Title>
                        {t("TITLE")}
                    </Title>
                </TitleContent>
                
                <CardExperienceContainer>
                    {cards.map((item) => (
                        <PortfolioCard key={item.id} title={t(item.title)} subtitleRow1={t(item.subtitle_row1)} subtitleRow2={t(item.subtitle_row2)} src={item.src} />
                    ))}
                </CardExperienceContainer>
          </PortfolioContainer>
    </SectionContainer>
 )
};

export default PortfolioSection;

