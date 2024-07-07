import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { BREAKPOINTS } from "@/utils/constants/breakpoints";

const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const SectionContainer = styled.section`
  top: 0;
  left: 0;
  width: 100vw;
  min-width: 320px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const BackgroundImage = styled(Image)`
  padding-top: 200px;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: absolute;
`;

export const LavaBackground = styled.div`
  position: absolute;
  width: 50%;
  height: 10%;
  background: radial-gradient(circle, var(--colors-green), var(--colors-lightBlue));
  filter: blur(80px);
  top: 25%;
  left: 80%;
  animation: ${gradientMove} 20s infinite ease;
  rotate: -10deg;
`;

export const TitleLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2%;
  overflow: hidden;
  max-width: 1000px;
  margin-top: 20px;
`;
export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 2.5%;
`;

export const Title = styled.h1`
  border-radius: 10px;
  padding: 10px 10px 5px 10px;
  font-size: var(--Title-font-size-xs);
  font-weight: var(--Title-font-weight);

  &.highlight{
    background-color: black;
    color: white;
  }

  @media (min-width: ${BREAKPOINTS.SM}px) { 
    font-size: var(--Title-font-size-sm);
  }
  @media (min-width:  ${BREAKPOINTS.MD}px) { 
    font-size: var(--Title-font-size-md);
    border-radius: 15px;
  }
  @media (min-width:  ${BREAKPOINTS.LG}px) { 
    font-size: var(--Title-font-size-lg);
    padding: 20px 10px 5px 10px;
  }
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
`;

export const BlurContainer = styled.div`
  display: flex;
  background-color: #D9D9D959;
  border-radius: 20px;
  width: 160px;
  height: 160px;
  justify-content: center;
  align-items: end;
  backdrop-filter: blur(5px);
  overflow: hidden;
  
  @media (min-width:  ${BREAKPOINTS.MD}px) { 
    width: 200px;
    height: 200px;
  }

  @media (min-width:  ${BREAKPOINTS.MD}px) { 
    width: 230px;
    height: 230px;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 2%;
  z-index: 1;

  @media (min-width:  ${BREAKPOINTS.MD + 1}px) { 
    gap: 0;
    flex-direction: row;
    height: 50%;
  }
`;

export const ImageContainer = styled.div`
  width: 140px;
  height: 140px;

  @media (min-width:  ${BREAKPOINTS.MD}px) { 
    width: 180px;
    height: 180px;
  }

  @media (min-width:  ${BREAKPOINTS.MD}px) { 
    width: 200px;
    height: 200px;
  }
`;

export const MyIcon = styled(Image)`
  object-fit: cover;
  width:100%;
  height:100%;
  filter: drop-shadow(2px 2px 10px var(--colors-green));
`;

export const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  gap: 10px;

  @media (max-width: ${BREAKPOINTS.MD}px) { 
   display: none;
  }

  @media (min-width:  ${BREAKPOINTS.LG}px) { 
    margin-right: 40px;
  }
`;

export const EducationCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0;
  width: 100%;
  gap: 10px;
  padding-left: 10px;
  height: 230px;
  overflow: scroll;
  margin-top: 20px;

  @media (min-width: ${BREAKPOINTS.MD + 1}px) { 
    margin-top: 0;
    margin-left: 10px;
    padding-left: 0;
    flex-direction: column;
    overflow: hidden;
    width: auto;
    gap: 1px;
  }
`;