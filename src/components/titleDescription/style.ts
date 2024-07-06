import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { BREAKPOINTS } from "@/utils/constants/breakpoints";

const createMoveAnimation = (start: string, end: string) => keyframes`
  from {
    transform: translateY(${start});
  }
  to {
    transform: translateY(${end});
  }
`;

const moveAnimation = createMoveAnimation('-100%', '0%');
const moveOutAnimation = createMoveAnimation('0%', '-100%');
const moveArrowAnimation = createMoveAnimation('0%', '200%');
const moveOutArrowAnimation = createMoveAnimation('200%', '0%');

export const TitleDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CircleContainer = styled.div<{$color: string}>`
  position: relative;
  display: flex;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: ${({ $color }) =>` 1px solid ${$color}`}; 
  justify-content: center;
  align-items: center;  
  overflow: hidden;
  @media (min-width:  ${BREAKPOINTS.MD}px) { 
    height: 50px;
    width: 50px;
  }
`;

export const AnimatedDiv = styled.div`
  position: absolute;
  transform: translateY(-100%);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: var(--colors-bg-gradient);
  z-index: 10;
  @media (min-width: ${BREAKPOINTS.MD}px) { 
    height: 50px;
    width: 50px;
  }
  .circleContainer:hover & {
    opacity: 1;
    animation: ${moveAnimation} 0.6s linear forwards;
  }
  &:not(:hover) {
    animation: ${moveOutAnimation} 0.6s linear forwards;
  }

`;

export const MyIcon = styled(Image)`
  object-fit: cover;
  width:100%;
  height:100%;
  border-radius: 50%;
`;
export const ArrowIcon = styled(Image)`
  .circleContainer:hover & {
    opacity: 1;
    animation: ${moveArrowAnimation} 0.6s linear forwards;
  }
  &:not(:hover) {
    animation: ${moveOutArrowAnimation} 0.6s linear forwards;
  }
`;

export const DescriptionContainer = styled.div<{$color: string}>`
  display: flex;
  border: ${({ $color }) =>` 1px solid ${$color}`}; 
  height: 35px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  @media (min-width:  ${BREAKPOINTS.MD}px) { 
    height: 50px;
  }
`;

export const Description = styled.p<{$color: string}>`
  font-size: var(--Subtitle-font-size-xs);
  font-weight: 400;
  margin-top: 3px;
  color: ${({ $color }) => $color};
  @media (min-width:  ${BREAKPOINTS.SM}px) { 
    font-size: var(--Subtitle-font-size-sm);
  }
  @media (min-width:  ${BREAKPOINTS.MD}px) { 
    font-size: var(--Subtitle-font-size-md);
    margin: 6px 10px 0 10px;
  }
  @media (min-width:  ${BREAKPOINTS.LG}px) { 
    font-size: var(--Subtitle-font-size-lg);
  }
`;