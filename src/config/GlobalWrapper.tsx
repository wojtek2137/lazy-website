import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Remove default focus for mouse users, keep for keyboard */
  *:focus {
    outline: none;
  }

  /* WCAG 2.1 AAA compliant focus states for keyboard navigation */
  *:focus-visible {
    outline: 3px solid #ffb800;
    outline-offset: 3px;
    border-radius: 4px;
    transition: outline 0.2s ease;
  }
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }

  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: #000000;
    overflow-x: hidden;
    font-family: var(--font-outfit), -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "liga", "kern";
    font-variant-ligatures: common-ligatures;
  }

  /* Enhanced scrollbar styling with new color system */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #000000;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ffb800, #d4a017);
    border-radius: 5px;
    box-shadow: 0 0 12px rgba(255, 184, 0, 0.4);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #d4a017, #ffb800);
    box-shadow: 0 0 16px rgba(255, 184, 0, 0.6);
  }

  /* Screen reader only class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Image loading background - only for photos, not icons */
  img {
    background: transparent;
  }

  /* Background only for large album cover images */
  img[src*="lazy.webp"],
  img[src*="christmas.webp"],
  img[src*="polish.webp"] {
    background: linear-gradient(
      135deg,
      #1a1a1a 0%,
      #2d2d2d 50%,
      #1a1a1a 100%
    );
  }

  /* Interactive elements minimum size - WCAG 2.1 AAA */
  button,
  a,
  input,
  select,
  textarea {
    min-height: 44px;
    min-width: 44px;

    @media (hover: hover) and (pointer: fine) {
      /* Desktop - slightly smaller acceptable */
      min-height: 40px;
      min-width: 40px;
    }
  }

  /* Reduced motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const GlobalWrapper = (): JSX.Element => {
  return <GlobalStyles />;
};
