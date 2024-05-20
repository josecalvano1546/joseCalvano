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
    border-top: 1px solid black;
`;

export const SkilsContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    width: 100%;
    min-width: 320px;
    height: 100%;
    padding: 2.8% 2.5%;
    background-color: black;
`;

export const ElementsContainer = styled.div`
    // background-color: aliceblue;
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const ElementsLeftContainer = styled.div`
    //background-color: yellowgreen;
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
    // background-color: violet;
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
    // background-color: aqua;
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
    background-color: bisque;
    display: flex;
    flex: 1.2;
    padding: 15px 0;
`;