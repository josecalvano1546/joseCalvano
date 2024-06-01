export const ArrowDown = (color: string): string => {
  const svgString = `
    <svg
      width="8"
      height="21"
      viewBox="0 0 8 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.64645 20.3536C3.84171 20.5488 4.15829 20.5488 4.35355 20.3536L7.53553 17.1716C7.7308 16.9763 7.7308 16.6597 7.53553 16.4645C7.34027 16.2692 7.02369 16.2692 6.82843 16.4645L4 19.2929L1.17157 16.4645C0.976311 16.2692 0.659728 16.2692 0.464466 16.4645C0.269204 16.6597 0.269204 16.9763 0.464466 17.1716L3.64645 20.3536ZM3.5 0L3.5 20H4.5L4.5 0L3.5 0Z"
        fill="${color}"
      />
    </svg>
  `;
  const base64 = btoa(svgString);
  return `data:image/svg+xml;base64,${base64}`;
};

export const ArrowRight = (color: string): string => {
  const svgString = `
    <svg
      width="21"
      height="8"
      viewBox="0 0 21 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
        fill="${color}"
      />
    </svg>
  `;
  const base64 = btoa(svgString);
  return `data:image/svg+xml;base64,${base64}`;
};

export const ArrowLeft = (color: string): string => {
  const svgString = `
    <svg
      width="21"
      height="8"
      viewBox="0 0 21 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
      d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM36 3.5L1 3.5V4.5L36 4.5V3.5Z"
        fill="${color}"
      />
    </svg>
  `;
  const base64 = btoa(svgString);
  return `data:image/svg+xml;base64,${base64}`;
};