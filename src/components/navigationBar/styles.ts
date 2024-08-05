"use client"

import styled from "styled-components";
import { Link } from "react-scroll";
import Image from "next/image";

export const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 20px;
  z-index: 5;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const NavigationBarContent = styled.div`
  display: flex;
  width: 95%;
  height: 100%;
  border-radius: 10px;
  align-items: center;
  background-color: #D9D9D91A;
  backdrop-filter: blur(9px);
  justify-content: space-between;
  padding: 0 20px;
`;

export const NavList = styled(Link)`
  cursor: pointer;
  color: black;
  margin: 0 20px;
`;

export const ButtonsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
`;

export const MyIcon = styled(Image)`
  object-fit: fill;
  width:100%;
  height:100%;
`;


export const LocaleContainer = styled.div`
  width: 25px;
  height: 25px;
  margin: 0 0 2px 30px;
  cursor: pointer;
`;

export const LocaleIcon = styled(Image)`
  object-fit: fill;
  width:100%;
  height:100%;
`;

export const MobileNavigationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 20px;
  z-index: 6;
  justify-content: space-between; 
  align-items: center;
  padding: 0 10px 0 10%;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: 5;
`;

export const MobileImageContainer = styled.div`
  border-radius: 10px;
  background-color:  #D9D9D91A;
  margin-right: 5px;
  cursor: pointer;
  border: none;
`;

export const MobileLogoContainer = styled.div`
  height: 40px;
  width: 40px;
`;

export const MobileBackgroundImage = styled(Image)`
  width: 100vw;
  height: 100vh;
`;

export const MobileSectionsContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // sm control
  gap: 50px;
  font-size: 38px;
`;

export const LanguagesIconContainer = styled.div`
  height: 30px;
  width: 30px;
`;

export const LanguagesIcon = styled(Image)`
  object-fit: fill;
  width:100%;
  height:100%;
`;

export const LanguageButton = styled.button`
  all: unset;
  position: absolute;
  width: 100%;
  bottom: 5vh;
  justify-content: center;
  display: flex;
  font-size: 18px;
  align-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
