import styled from "styled-components";
import Image from "next/image";
import { BREAKPOINTS } from "@/utils/constants/breakpoints";

export const SectionContainer = styled.section`
   // position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-width: 320px;
    height: 100vh;
    padding-left: 5%;
    display: flex;
    flex-direction: column;
`;

export const BackgroundImage = styled(Image)`
    padding-top: 20px;
    width: 100vw;
    height: 100vh;
    z-index: -1;
`;

export const PresentationContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1.5;
`;

export const SubtitleMobileContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    max-width: 90%;
    @media (min-width:  ${BREAKPOINTS.SM}px) { 
        display: none;
    }

`;

export const TitleContainer = styled.div`
    display: flex;
    flex: 3;
    flex-direction: column;
    justify-content: flex-end;
    gap: 25px;

   @media (min-width:  ${BREAKPOINTS.SM}px) { 
        padding-bottom: 100px;
    }
    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        padding-bottom: 100px;
    }
    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        font-size: var(--Title-font-size-lg);
        padding-bottom: 70px;
    } 

`;

export const TitleLine = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2%;
    overflow: hidden;
`;

export const Title = styled.h1`
    border-radius: 10px;
    padding: 10px 10px 5px 10px;
    font-size: var(--Title-font-size-xs);
    font-weight: var(--Title-font-weight);

    &.highlight{
        background-color: black;
        color: white;
    }

    @media (min-width: ${BREAKPOINTS.SM}px) { 
        font-size: var(--Title-font-size-sm);
    }
    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        font-size: var(--Title-font-size-md);
        border-radius: 15px;
    }
    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        font-size: var(--Title-font-size-lg);
        padding: 20px 10px 5px 10px;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: row;
`;

export const SocialButtons = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    width: 100%;
    max-width: 300px;
`;

export const SocialsButtonsContainers = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    gap: 5px;
    width: 100%;
`;

export const SocialText = styled.div`
    display: flex;
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    transform: rotate(180deg);
    justify-content: center;
`;

export const SubtitleCV = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    width: 100%;
`;

export const SubtitleContainer = styled.div`
    display: none;
    flex: 1;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    @media (min-width: ${BREAKPOINTS.SM}px) { 
        font-size: var(--Subtitle-font-size-sm);
        max-width: 90%;
        display: flex;
    }
    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        font-size: var(--Subtitle-font-size-md);
        
    }
    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        font-size: var(--Subtitle-font-size-lg);
        max-width: 70%;
    }

`;

export const Subtitle = styled.h2`
    font-size: var(--Subtitle-font-size-xs);
    font-weight: var(--Subtitle-font-weight);

    @media (min-width: ${BREAKPOINTS.SM}px) { 
        font-size: var(--Subtitle-font-size-sm);
    }
    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        font-size: var(--Subtitle-font-size-md);
    }
    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        font-size: var(--Subtitle-font-size-lg);
    }
`;


export const ButtonCV = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;

    @media (min-width: ${BREAKPOINTS.SM}px) { 
        align-items: start;
    }
`;