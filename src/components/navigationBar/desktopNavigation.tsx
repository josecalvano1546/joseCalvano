// NextJS
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap"; 

// Styles
import { ButtonsContent, ImageContainer, LocaleContainer, LocaleIcon, MyIcon, NavigationBarContent, NavigationContainer } from "./styles";

// Source
import JCIcon from '../../../public/icons/JC.svg';
import Locale from '../../../public/icons/localeIcon.svg';

// Hooks
import RenderSections from "./renderSections";
import LanguajeSelector from "../languajeSelector";

const DesktopNavigation = () => {
    const navbarRef = useRef(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpenDialog, setOpenDialog] = useState(false);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        gsap.to(navbarRef.current, { y: -100, duration: 0.5 });
        setOpenDialog(false);
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

    return (
        <NavigationContainer ref={navbarRef}>
            <NavigationBarContent>
                <ImageContainer>
                    <MyIcon src={JCIcon} alt='Logo icon' />
                </ImageContainer>
                <ButtonsContent>
                   <RenderSections/>
                    <LocaleContainer onClick={()=>{setOpenDialog(!isOpenDialog)}}>
                        <LocaleIcon src={Locale} alt='Locale icon' />
                    </LocaleContainer>
                </ButtonsContent>
            </NavigationBarContent>
            {isOpenDialog && <LanguajeSelector isOpenDialog={isOpenDialog} setOpenDialog={setOpenDialog} />}
        </NavigationContainer>
    )
};

export default DesktopNavigation;