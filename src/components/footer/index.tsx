"use client";

// NextJS
import React, { useEffect, useRef } from "react";

// Styles
import { BackgroundImage, FooterContainer, LavaBackground, SocialsButtonsContainers } from "./styles";
import gsap from "gsap";

// Assets
import bg from '../../../public/background/footerBg.webp';
import Github from '/public/icons/github.webp';
import Instagram from '/public/icons/instagram.webp';
import Linkeding from '/public/icons/linkedin.webp';
import SocialsButton from "../socialsButton";

const Footer = () => {
    const lavaRef = useRef(null);

    useEffect(() => {
      gsap.to(lavaRef.current, {
        duration: 5,
        x: '+=50',
        y: '+=50',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, []);

    return (
        <FooterContainer>
            <LavaBackground  ref={lavaRef} />
            <BackgroundImage
                objectFit="contain"
                alt="footer image"
                src={bg}
            />
            <SocialsButtonsContainers>
                <SocialsButton href="https://www.linkedin.com/in/josecalvano/" src={Linkeding} alt="linkeding icon"  transform='0deg' background='white' />
                <SocialsButton href="https://www.instagram.com/jose_calvano/" src={Instagram} alt="instagram icon"  transform='0deg' background='white' />
                <SocialsButton href="https://github.com/josecalvano1546" src={Github} alt="github icon"  transform='0deg' background='white' />
            </SocialsButtonsContainers>
        </FooterContainer>
    )
}

export default Footer;