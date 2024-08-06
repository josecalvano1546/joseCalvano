"use client";

// NextJS
import React, { useEffect, useRef, useState } from "react";

// Libraries
import gsap from "gsap"; 
import Hamburger from "hamburger-react";
import { useTranslation } from "react-i18next";
import LanguajeSelector from "../languajeSelector";

// Styles
import { LanguageButton, LanguagesIcon, LanguagesIconContainer, MobileBackgroundImage, MobileImageContainer, MobileLogoContainer, MobileMenuIcon, MobileNavigationContainer, MobileSectionsContainer, ModalContainer, MyIcon} from "./styles";

// Hooks
import { useBrowserLanguageState } from "@/hooks/useBrowserLanguage";

// Source
import bg from '/public/background/homeBackground.webp';
import RenderSections from "./renderSections";
import JCIcon from '../../../public/icons/JC.svg';
import LanguageIcon from '../../../public/icons/LanguageIcon.svg';



const MobileNavigation = () =>{
    const { browserLanguage } = useBrowserLanguageState();
    const [lastScrollY, setLastScrollY] = useState(0);
    const divRef = useRef(null);
    const navbarRef = useRef(null);

    const [isOpen, setOpen] = useState(false);
    const [isOpenDialog, setOpenDialog] = useState(false);

    const { t } = useTranslation("LANGUAJES");
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (window.scrollY > lastScrollY && window.scrollY > 10) {
        gsap.to(navbarRef.current, { y: -100, duration: 0.5 });
      } else {
        gsap.to(navbarRef.current, { y: 0, duration: 0.5 });
      }
      setLastScrollY(currentScrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);

    const handleClick = () => {
        setOpen(!isOpen)
        if (isOpen) {
          document.body.style.overflow = 'auto';
          gsap.to(divRef.current, { opacity: 0, duration: 0.3 });
          setOpenDialog(false)
        } else {
          document.body.style.overflow = 'hidden';
          gsap.to(divRef.current, { opacity: 1, duration: 0.4 });
        }
        setOpen(!isOpen);
    };

    return(
        <>
        <MobileNavigationContainer ref={navbarRef}>
            <MobileLogoContainer>
               { isOpen && <MyIcon src={JCIcon} />}
            </MobileLogoContainer>

            <MobileImageContainer>
                <Hamburger toggled={isOpen} toggle={handleClick} size={25}/> 
            </MobileImageContainer>

        </MobileNavigationContainer>

       <ModalContainer ref={divRef} isOpen={isOpen}>
            <MobileBackgroundImage
                layout="fill"
                alt="water_portrait"
                src={bg}
            />
            <MobileSectionsContainer>
                <RenderSections handleClick={handleClick} isOpen={isOpen}/>
                
               {isOpenDialog && <LanguajeSelector isOpenDialog={isOpenDialog} setOpenDialog={setOpenDialog} />}

                <LanguageButton onClick={()=>{setOpenDialog(!isOpenDialog)}} >

                    <LanguagesIconContainer>
                        <LanguagesIcon src={LanguageIcon} alt="language Icon"/>
                    </LanguagesIconContainer>

                    <p>{t(browserLanguage)}</p>
                    
                </LanguageButton>
            </MobileSectionsContainer>
           
        </ModalContainer>
        </>
    )
}

export default MobileNavigation;