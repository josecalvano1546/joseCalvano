"use client"

// NextJS
import { useEffect, useState } from 'react';

// Libraries
import constate from 'constate';

// Utils
import { BREAKPOINTS } from '@/utils/constants/breakpoints';

interface Response {
  resolution: number;
  isMobileResolution: boolean;
}

const useResolution = (): Response => {
  const [resolution, setResolution] = useState(0);
  const [isMobileResolution, setIsMobileResolution] = useState(false);

  const checkIsMobile = (width: number) => width < BREAKPOINTS.MD ; 

  const updateResolution = () => {
    const width = window.innerWidth;
    setResolution(width);
    setIsMobileResolution(checkIsMobile(width));
  };

  useEffect(() => {
    updateResolution();
    window.addEventListener('resize', updateResolution);

    return () => {
      window.removeEventListener('resize', updateResolution);
    };
  }, []);

  return { resolution, isMobileResolution };
};

export const [ResolutionProvider, useResolutionState] = constate(useResolution);
