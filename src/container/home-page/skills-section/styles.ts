import { BREAKPOINTS } from "@/utils/constants/breakpoints";
import styled from "styled-components";

export const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-width: 320px;
    height: 100vh;
    padding: 2.5% 2.5% 5% 2.5%;
    background-color: white;
    overflow-x: hidden;
    z-index: -1;
    @media (max-width: ${BREAKPOINTS.MD}px) { 
        padding: 2.5% 0;
    }
`;

export const SkilsContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    width: 100%;
    min-width: 320px;
    height: 100%;
    padding: 20px 20px;
    background-color: black;
    z-index: 2;
`;

export const ElementsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const ElementsLeftContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
`;

export const TitleContent = styled.div`
`;

export const Title = styled.h1`
    font-weight: 500;
    color: white;
    font-size: var(--Title-font-size-sm); 

    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        font-size: var(--Title-font-size-md);
    }
    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        font-size: var(--Title-font-size-lg);
    }
`;

export const ElementsRightContainer = styled.div`
    flex: 1;
    flex-direction: column;
    display: none;
    justify-content: flex-end;
    align-items: flex-end;
    @media (min-width:  ${BREAKPOINTS.SM}px) { 
        display: flex;
    }
`;

export const SubtitleContainerMobile = styled.div`
    width: 100%;
    font-size: var(--Subtitle-font-size-xs);
    text-align: center;
    display: flex;
    @media (min-width: ${BREAKPOINTS.SM}px) { 
        display: none;
    }
`;

export const SubtitleContainer = styled.div`
    border-bottom: 1px solid white;
    max-width: 500px;
    text-align: end;
`;

export const Subtitle = styled.p`
    font-size: var(--Subtitle-font-size-xs);
    color: white;
    padding-bottom: 5px;
    font-weight: 400;

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

export const DescriptionContainer = styled.div`
    display: flex;
    flex: 1;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
    gap: 10px;
`;

export const ListSkillContainer = styled.div`
    display: flex;
    flex: 1.2;
    padding: 15px 0 15px 30px;
    gap: 30px;
    align-items: center;
    position:relative;
    
`;

export const SkillsContainer = styled.div`
    display: flex;
    overflow-x: scroll;
    gap: 20px;
    margin-left: -15px;
    padding-left: 15px;
    padding-right: 20px;
`;

export const BlurEffectLeft = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   width: 34px;
   left: 0;
   background: linear-gradient(90deg, rgba(0,0,0,1) 36%, rgba(0,212,255,0) 100%);
`;

export const BlurEffectRight = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   width: 30px;
   right: -5px;
   background: linear-gradient(90deg, rgba(0,212,255,0) 0%, rgba(0,0,0,1) 70%);
`;