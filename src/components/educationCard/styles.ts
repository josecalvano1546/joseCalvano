import { BREAKPOINTS } from "@/utils/constants/breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 200px;
    background-color:  black;
    border-radius: 20px;
    padding: 20px;
    backdrop-filter: blur(5px);
    position: relative;
    min-width: 300px;

    @media (min-width:  ${BREAKPOINTS.SM}px) { 
        min-width: 330px;
    }

    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        min-width: 440px;
        min-height: 230px;
    }

    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        min-width: 570px;
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
    text-align: start;
    margin-top: 30px;
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
    margin-top: 20px;
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

export const UniversityIconContainer = styled.div`
    position: absolute;
    width: 100px;
    height: 40px;
    bottom: 20px;
    right: 20px;

    @media (max-width:  ${BREAKPOINTS.LG}px) { 
        display: none;
    }
`;

export const UniversityIcon = styled(Image)`
    object-fit: fill;
    width: 100%;
    height: 100%;
`;