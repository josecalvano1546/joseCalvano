"use client"

import { BREAKPOINTS } from "@/utils/constants/breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const ImageContainer = styled.div`
    display: flex;
    position: relative;
    width: 35px;
    height: 35px;
    border-radius: 50px;
    transform: rotate(270deg);

    @media (min-width: ${BREAKPOINTS.SM}px) { 
        width: 40px;
        height: 40px;
    }
    @media (min-width:  ${BREAKPOINTS.MD}px) { 
        width: 47px;
        height: 47px;
    }
    @media (min-width:  ${BREAKPOINTS.LG}px) { 
        width: 57px;
        height: 57px;
    }
    // background-color: purple;
`;

export const SocialImage = styled(Image)`
`;


export const Effect = styled.div`
    position: absolute;
    width: 57px;
    height: 57px;
    border-radius: 50px;
   // background-color: green;
`;

