import  { keyframes } from "styled-components"

// Animation keyframes
const FadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-150%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const FadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(150%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export { FadeInLeft, FadeInRight, FadeIn }