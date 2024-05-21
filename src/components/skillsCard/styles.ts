import { BREAKPOINTS } from "@/utils/constants/breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const CardContainer = styled.div`
    flex-direction: column;
    min-width: 250px;
    max-height: 300px;
    background-color: #FFFFFF1F;
    border-radius: 20px;
    padding: 20px;

    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        min-width: 270px;
    }
    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        min-width: 350px;
        min-height: 340px;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
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
    margin-top: 15px;
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
    margin-top: 25px;
`;

export const Description = styled.p`
    display: flex;
    font-size: var(--CardSubtitle-font-size-xs);
    color: white;
    line-height: 1.5;
    font-family: 400;
    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        font-size: var(--CardSubtitle-font-size-md);
    }
    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        font-size: var(--CardSubtitle-font-size-lg);
    }
`;