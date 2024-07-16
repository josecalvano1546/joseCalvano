import styled from "styled-components";
import Image from "next/image";

export const FooterContainer = styled.div`
    display: flex;
    position: relative;
    height: 25vh;
    width: 100%;
    overflow: hidden;
`;

export const BackgroundImage = styled(Image)`
    padding-top: 20px;
    width: 150vw;
    height: 25vh;
    z-index: -1;
    position: absolute;
    left: -90px;
    right: -2500px;
    top: 50px;
`;

export const LavaBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 20vh;
  background-color: aqua;
  border-radius: 50%;
  background: radial-gradient(circle, var(--colors-green), var(--colors-lightBlue));
  filter: blur(40px);
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
`;

export const SocialsButtonsContainers = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    padding-left: 30px;
    gap: 10px;
    width: 100%;
    align-items: center;
    padding-top: 100px;
`;
