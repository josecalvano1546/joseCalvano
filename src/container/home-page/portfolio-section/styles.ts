import styled from "styled-components";
import { BREAKPOINTS } from "@/utils/constants/breakpoints";

export const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-width: 320px;
    height: auto;
    padding: 2.5% 2.5% 5% 2.5%;
    background-color: white;
    overflow-x: hidden;
    z-index: -1;
    @media (max-width: ${BREAKPOINTS.MD}px) { 
        padding: 2.5% 0;
    }
`;

export const PortfolioContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 320px;
    height: 100%;
    padding: 20px 20px 30px 20px;
    background-color: black;
    z-index: 2;
    align-items: center;

    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        border-radius: 20px;
    }
`;

export const TitleContent = styled.div`
    margin-top: 3%;
    text-align: center;
    width: 90%;
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

export const CardExperienceContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
    margin-top: 50px;
    width: 95%;
`;