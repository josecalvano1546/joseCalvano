import { BREAKPOINTS } from "@/utils/constants/breakpoints";
import styled from "styled-components";

export const SectionContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 0 2.5%;
    
    @media (max-width: ${BREAKPOINTS.MD}px) { 
        padding: 2.5% 0;
    }
`;


export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 25px;
    margin-top: 35px;

    @media (min-width:  ${BREAKPOINTS.XS}px) { 
        margin-top: 40px;
    }

    @media (min-width:  ${BREAKPOINTS.SM}px) { 
        margin-top: 45px;
    }
 
    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        margin-top: 60px;
    }
 
    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        margin-top: 80px;
    } 
`;

export const TitleLine = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    width: 100%;
    justify-content: center;
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

    &.subsection{
        margin-top: 20px;
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
    }
`;

export const SubtitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    padding: 0 2%;
    margin-top: 25px;

    @media (min-width:  ${BREAKPOINTS.XS}px) { 
        padding: 0 10%;
        margin-top: 40px;
    }

    @media (min-width:  ${BREAKPOINTS.SM}px) { 
        margin-top: 45px;
    }
 
    @media (min-width:  ${BREAKPOINTS.MD}px) {
        margin-top: 60px;
    }
 
    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        margin-top: 80px;
    } 
`;

export const Description = styled.p`
    font-size: var(--Subtitle-font-size-xs);
    font-weight: 400;
    color: black;

    @media (min-width:  ${BREAKPOINTS.SM}px) { 
        font-size: var(--Subtitle-font-size-sm);
    }

    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        font-size: var(--Subtitle-font-size-md);
    }

    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        font-size: var(--Subtitle-font-size-lg);
    }
`;

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 320px;
    background-color: black;
    margin-top: 35px;
    padding: 20px 20px;
    text-align: center;

    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        border-radius: 20px;
    }
`;

export const CardExperienceContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-top: 50px;
`;