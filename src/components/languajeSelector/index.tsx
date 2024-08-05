"use client";

// NextJS
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

// Styles
import { ButtonContainers, DialogIcon, DialogIconContainer, LanguageContainer, LanguagesIcon, LanguagesIconContainer } from "./styles";

// Hooks
import { useBrowserLanguageState } from "@/hooks/useBrowserLanguage";

// Utils
import { LANGUAGES } from "./data";

// Source
import DialogImg from '../../../public/icons/dialogIcon.svg';


// Types
interface DialogsProps {
    isOpenDialog: boolean;
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const LanguajeSelector: React.FC<DialogsProps> = ({ isOpenDialog, setOpenDialog }) => {
    
    const { browserLanguage, handleBrowserLanguage } = useBrowserLanguageState();
    const { t } = useTranslation("LANGUAJES");
    const divRef = useRef(null);

    useEffect(() => {
        gsap.to(divRef.current, { opacity: 1, duration: 0.4 });
    }, [])

    const handleClick = (key: string) => {
        handleBrowserLanguage(key)

        setOpenDialog(!isOpenDialog)
        if (isOpenDialog) {
            gsap.to(divRef.current, { opacity: 0, duration: 0.3 });
        } else {
            gsap.to(divRef.current, { opacity: 1, duration: 0.4 });
        }
        setOpenDialog(!isOpenDialog);
    };


    return (
        <LanguageContainer ref={divRef}>
            {LANGUAGES.map(({ key, src }) => {
                return (
                    <ButtonContainers key={key} type="button" onClick={() => { handleClick(key) }}>

                        <LanguagesIconContainer>
                            <LanguagesIcon
                                alt="Language icons"
                                src={src}
                            />
                        </LanguagesIconContainer>
                        <p>{t(key)}</p>
                        {browserLanguage === key && <p>{`>`}</p>}

                    </ButtonContainers>

                )
            })}
            <DialogIconContainer>
                <DialogIcon src={DialogImg} alt="Dialog Icon" />
            </DialogIconContainer>
        </LanguageContainer>
    )
}

export default LanguajeSelector;