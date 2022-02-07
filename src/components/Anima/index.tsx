import React from "react"
import styled, { css, Keyframes } from "styled-components"
import { FadeInLeft, FadeIn, FadeInRight } from './keyframes'

type AvailableAnimations = "FadeInRight" | "FadeInLeft" | "FadeIn"; 

export const animations: Record<AvailableAnimations, Keyframes> = {
  FadeInLeft,
  FadeInRight,
  FadeIn,
}

interface AnimationBoxProps  {
    animate?: boolean;
    animationName: keyof typeof animations;
    animationDuration?: number;
    animationDelay?: number;
    durationUnit?: "s" | "ms";
    easing?: string;
}

interface AnimaProps extends AnimationBoxProps {
    children?: React.ReactNode | React.ReactNode[];
}

const AnimationBox = styled.div<AnimationBoxProps>`
  ${({ animate = true, animationName, animationDuration = 1000, durationUnit="ms", animationDelay = 0, easing = "ease" }) =>
    animate &&
    css`
      animation-name: ${animations[animationName]};
      animation-duration: ${`${animationDuration}${durationUnit}`};
      animation-delay: ${`${animationDelay}${durationUnit}`};
      animation-timing-function: ${easing};
      animation-fill-mode: both;
    `}
`

function Anima({children, ...props} : AnimaProps) {
  return <AnimationBox {...props}>{children}</AnimationBox>
}

export default Anima