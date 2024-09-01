// NextJS
import { useState } from "react";

// Utils
import { SECTIONS } from "./data";
import fonts from "../../../public/fonts";

// Hooks
import { useTranslation } from "react-i18next";

// Styles
import { NavList, Text } from "./styles";

// type
interface RenderSectionProps {
    handleClick?: () => void;
}

const RenderSections: React.FC<RenderSectionProps> = ({ handleClick }): JSX.Element[] => {
    const [showNavBar, setShowNavBar] = useState(false);
    const { t } = useTranslation("NAVBAR");

    return SECTIONS.map(({ key, label }, id) => {
        return(
        <NavList
            key={id}
            to={key}
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            className={fonts().className}
            onClick={() => {
                setShowNavBar(!showNavBar);
                if (handleClick) {
                    handleClick()
                }
            }}
        >
            <Text>
            {t(label)}
            </Text>
        </NavList>
    )});
};

export default RenderSections;
