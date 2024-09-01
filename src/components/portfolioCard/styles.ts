import { BREAKPOINTS } from "@/utils/constants/breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 200px;
    background-color: #FFFFFF1F;
    border-radius: 20px;

    @media (min-width:  ${BREAKPOINTS.MD +1}px) { 
        min-height: 250px;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    width: fit-content;
    border-radius: 50px;
    background: linear-gradient(90deg, var(--colors-green) 0%, var(--colors-lightBlue) 100%);
`;

export const Date = styled.p`
    margin: 5px 20px;
    font-size: var(--CardDate-font-size-xs);

    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        margin: 7px 20px;
        font-size: var(--CardDate-font-size-md);
    }

    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        margin: 9px 20px;
        font-size: var(--CardDate-font-size-lg);
    }
`;



export const TitleContainer = styled.div`
    display: flex;
    text-align: start;
`;

export const Title = styled.h3`
    display: flex;
    color: white;
    font-family: 500;
    font-size: var(--CardTitle-font-size-xs);

    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        font-size: var(--CardTitle-font-size-md);
    }

    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        font-size: var(--CardTitle-font-size-lg);
    }
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 20px;
    height: 100%;
`;

export const Description = styled.p`
    display: flex;
    color: white;
    line-height: 1.5;
    font-family: 400;
    text-align: start;
    font-size: var(--CardSubtitle-font-size-xs);

    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        font-size: var(--CardSubtitle-font-size-md);
    }
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 20px 0 20px;
`;

export const ImageContainer = styled.div`
    display: flex;

    min-width: 100px;
    width: 100px;
    @media (min-width:  ${BREAKPOINTS.SM}px) { 
        min-width: 180px;
        width: 180px;
    }

    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        min-width: 200px;
        width: 200px;
    }

    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        min-width: 220px;
        width: 220px;
    }
`;

export const ImageIcon = styled(Image)`
    object-fit: fill;
    width: 100%;
    height: 100%;
    border-radius: 20px 0 0 20px;
`;