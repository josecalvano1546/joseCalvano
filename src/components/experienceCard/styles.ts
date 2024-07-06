import { BREAKPOINTS } from "@/utils/constants/breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 200px;
    background-color: #FFFFFF1F;
    border-radius: 20px;
    padding: 20px;

    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        width: 49%;
        min-height: 250px;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    width: fit-content;
    border-radius: 50px;
    background: linear-gradient(90deg, rgba(196,255,65,1) 0%, rgba(179,255,228,1) 100%);
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

export const ImageContainer = styled(Image)`
    height: 75px;
    width: 75px;
    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        height: 95px;
        width: 95px;
    }
    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        height: 120px;
        width: 120px;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    margin-top: 30px;
    text-align: start;
`;

export const Title = styled.h3`
    display: flex;
    font-size: var(--CardTitle-font-size-xs);
    color: white;
    font-family: 500;
    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        font-size: var(--CardTitle-font-size-md);
    }
    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        font-size: var(--CardTitle-font-size-lg);
    }
`;

export const DescriptionContainer = styled.div`
    display: flex;
    margin-top: 30px;
`;

export const Description = styled.p`
    display: flex;
    font-size: var(--CardSubtitle-font-size-xs);
    color: white;
    line-height: 1.5;
    font-family: 400;
    text-align: start;
    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        font-size: var(--CardSubtitle-font-size-md);
    }
    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        font-size: var(--CardSubtitle-font-size-lg);
    }
`;