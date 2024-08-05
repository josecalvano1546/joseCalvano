"use client";

// NextJS
import React, { useEffect, useRef, useState } from "react";

// Hooks
import { useResolutionState } from '@/hooks/useResolution';

// Components
import DesktopNavigation from "./desktopNavigation";
import MobileNavigation from "./mobileNavigation";

const NavigationBar = () => {
    const { isMobileResolution } = useResolutionState();


    return (
        <>
            {
                isMobileResolution ?   <MobileNavigation/> : <DesktopNavigation />
            }
        </>
    )

};

export default NavigationBar;