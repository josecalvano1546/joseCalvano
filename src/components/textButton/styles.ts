// NextJS
import Link from "next/link";
import Image from "next/image";

// Utils
import { BREAKPOINTS } from "@/utils/constants/breakpoints";

// Library
import styled, { keyframes } from "styled-components";

const slideUpY = {
  xs: '475%',
  sm: '455%',
  md: '530%',
  lg: '500%'
};

// Icon Animation
const slideInIcon = keyframes`
  from {
    transform: translateX(10%);
  }
  to {
    transform: translateX(var(--slide-up-y));
  }
`;

const slideOutIcon = keyframes`
  from {
    transform: translateX(500%);
  }
  to {
    transform: translateX(10%);
  }
`;

// Text Animation
const slideInText = keyframes`
  from {
    transform: translateX(38%);
  }
  to {
    transform: translateX(15%);
  }
`;

const slideOutText = keyframes`
  from {
    transform: translateX(15%);
  }
  to {
    transform: translateX(38%);
  }
`;

// Background Animation
const moveAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const moveOutAnimation = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const ButtonContainer = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  width: 180px;
  height: 45px;
  border-radius: 50px;
  border: 1px solid black;
  overflow: hidden;

  @media (min-width: ${BREAKPOINTS.SM}px) { 
    width: 200px;
    height: 50px;
  }
  @media (min-width:  ${BREAKPOINTS.MD}px) { 
    width: 230px;
    height: 55px;
  }
  @media (min-width:  ${BREAKPOINTS.LG}px) { 
    width: 250px;
    height: 60px;
  }
`;

export const ButtonText = styled.p`
  position: absolute;
  font-weight: 500;
  margin-top: 3px;
  font-size: var(--Subtitle-font-size-xs);
  color: black;

  .buttonContainer:hover & {
    opacity: 1;
    animation: ${slideInText} 0.5s forwards;
  }

  &:not(:hover) {
    animation: ${slideOutText} 0.5s forwards;
  }

  @media (min-width: ${BREAKPOINTS.SM}px) { 
    font-size: var(--Subtitle-font-size-sm);
  }
  @media (min-width:  ${BREAKPOINTS.MD}px) { 
     font-size: var(--Subtitle-font-size-md);
  }
`;

export const IconContainer = styled.div`
  --slide-up-y: ${slideUpY.xs};

  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid black;

  .buttonContainer:hover & {
    opacity: 1;
    animation: ${slideInIcon} 0.6s forwards;
  }

  &:not(:hover) {
    animation: ${slideOutIcon} 0.6s forwards;
  }

  @media (min-width: ${BREAKPOINTS.SM}px) { 
    --slide-up-y: ${slideUpY.sm};
    width: 35px;
    height: 35px;
  }
  @media (min-width:  ${BREAKPOINTS.MD}px) { 
     --slide-up-y: ${slideUpY.md};
  }
  @media (min-width:  ${BREAKPOINTS.LG}px) { 
    width: 40px;
    height: 40px;
    --slide-up-y: ${slideUpY.lg};
  }
`;

export const ArrowIcon = styled(Image)`
  width: 20px;
`;

export const AnimatedDiv = styled.div`
  position: absolute;
  transform: translateX(-100%);
  width: 250px;
  height: 60px;
  border-radius: 50px;
  background: var(--colors-bg-gradient);
  z-index: -1;
    
  .buttonContainer:hover & {
    opacity: 1;
    animation: ${moveAnimation} 0.3s linear forwards;
  }

  &:not(:hover) {
    animation: ${moveOutAnimation} 0.3s linear forwards;
  }
`;