/// <reference types="react-scripts" />

// Additional asset type declarations not covered by react-scripts
declare module "*.woff2" {
  const src: string;
  export default src;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}
