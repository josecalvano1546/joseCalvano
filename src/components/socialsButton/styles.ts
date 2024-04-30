// NextJS
import Image from "next/image";
import Link from "next/link";

// Utils
import { BREAKPOINTS } from "@/utils/constants/breakpoints";

// Libraries
import styled, { keyframes } from "styled-components";

const moveAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

export const ImageContainer = styled(Link)`
    display: flex;
    position: relative;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    transform: rotate(270deg);
    overflow: hidden;
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
`;

export const SocialImage = styled(Image)`
`;

export const AnimatedDiv = styled.div`
  position: absolute;
 transform: translateY(100%);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: var(--colors-bg-gradient);
    z-index: -1;
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
  .imgContainer:hover & {
    opacity: 1;
    animation: ${moveAnimation} 0.4s linear forwards;
  }
`;

