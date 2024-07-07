// NextJS
import Image from "next/image";

// Utils
import { BREAKPOINTS } from "@/utils/constants/breakpoints";

// Libraries
import styled, { keyframes } from "styled-components";

const createMoveAnimation = (start: string, end: string) => keyframes`
  from {
    transform: translateX(${start});
  }
  to {
    transform: translateX(${end});
  }
`;

const moveAnimation = createMoveAnimation('-100%', '0%');
const moveOutAnimation = createMoveAnimation('0%', '-100%');
const moveArrowAnimation = createMoveAnimation('0%', '200%');
const moveOutArrowAnimation = createMoveAnimation('200%', '0%');

const getDirection = (direction?: string) => {
  switch (direction) {
    case 'right':
      return 'rotate(0deg)';
    case 'left':
      return 'rotate(180deg)';
    case 'up':
      return 'rotate(-90deg)';
    case 'down':
      return 'rotate(90deg)';
    default:
      return 'rotate(0deg)';
  }
};

export const Container = styled.div``;

export const ImageContainer = styled.div<{ direction: string, borderColor:string }>`
  display: flex;
  position: relative;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transform: ${({ direction }) => (getDirection(direction))};
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border: ${({ borderColor }) => `1px solid ${borderColor}`};
  cursor: pointer;

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
  .arrowContainer:hover & {
    border: 1px solid black;
  }
`;

export const ArrowImage = styled(Image)`
  .arrowContainer:hover & {
    opacity: 1;
    animation: ${moveArrowAnimation} 0.2s linear forwards;
  }
  &:not(:hover) {
    animation: ${moveOutArrowAnimation} 0.2s linear forwards;
  }
`;

export const ArrowImageAlt = styled(Image)`
  width: 100%;
`;

export const AnimatedDiv = styled.div`
  position: absolute;
  transform: translateX(-100%);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: var(--colors-bg-gradient);
  z-index: -1;
  justify-content: center;
  align-content: center;
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
  .arrowContainer:hover & {
    opacity: 1;
    animation: ${moveAnimation} 0.2s linear forwards;
  }
  &:not(:hover) {
    animation: ${moveOutAnimation} 0.2s linear forwards;
  }
`;

