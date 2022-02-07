import hexToRGB from 'hex-rgb';
import React from 'react'
import styled from "styled-components"
import { theme } from '../config/theme'

type TitleAlignment = "center" | "flex-start" | "flex-end";

const SectionTitle = styled.h1<{ alignment?: TitleAlignment, color?: keyof typeof theme.colors }>`
    display: flex;
    justify-content: ${(props) => props.alignment ? props.alignment : 'flex-start'};
    font-size: 25px; 
    font-weight: bold;
    color: ${({ theme, color }) => color ? color : hexToRGB(theme.colors.white, { format: 'css', alpha: 0.8 })};
    padding-top: 4.5rem;
`

const SectionWrapper = styled.section<{
    display?: string;
    flexDirection?: "row" | "column";
    justifyContent?: "flex-start" | "flex-end" | "center";
    alignItems?: "flex-start" | "flex-end" | "center";
    height?: string;
    visibility?: "visible" | "hidden";
}>`
    display: ${({ display }) => display ? display : undefined};
    flex-direction: ${({ flexDirection }) => flexDirection ? flexDirection : undefined};
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : undefined};
    alignItems: ${({ alignItems }) => alignItems ? alignItems : undefined};
    width: 100%;
    height: ${({ height }) => height ? height : "110vh"};
    position: relative;
    overflow: hidden;
    visibility: ${({ visibility }) => visibility ? visibility : "visible"};
`

const Line = styled.div<{ marginRight?: string, marginLeft?: string }>`
    height: 1px;
    width: 30%;
    background-color: ${({ theme }) => hexToRGB(theme.colors.primary, { format: 'css', alpha: 0.5 })};
    margin-right: ${({ marginRight }) => marginRight ? marginRight : undefined};
    margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : undefined};
`

const Character = styled.span`
    color: ${({ theme }) => hexToRGB(theme.colors.primary, { format: 'css', alpha: 0.5 })};
    font-size: 70px;
    font-weight: bold;
`

const Separator = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
`

interface SectionProps {
    children?: React.ReactNode | React.ReactNode[];
    title?: string;
    titleColor?: keyof typeof theme.colors;
    id?: string;
    titleAlignment?: TitleAlignment
    withSeparator?: boolean;
    display?: string;
    flexDirection?: "row" | "column";
    justifyContent?: "flex-start" | "flex-end" | "center";
    alignItems?: "flex-start" | "flex-end" | "center";
    visibility?: "hidden" | "visible";
    height?: string;
    ref?: React.Ref<HTMLElement>;
}

const ForwardedRefSection = React.forwardRef<HTMLInputElement, SectionProps>((props, ref) => {
    const { children, title, id, titleAlignment, titleColor, withSeparator = false, ...rest } = props;

    return (
        <>
        <SectionWrapper ref={ref} id={id} {...props}>
            {title ?  (
                <SectionTitle alignment={titleAlignment}>{title}</SectionTitle>
            ): null}
            {children}
        </SectionWrapper>
            {withSeparator ? (
                <Separator>
                    <Line marginRight="1rem" />
                    <Character>~</Character>
                    <Line marginLeft="1rem" />
                </Separator>
            ): null}
        </>
    )
}) 

export default ForwardedRefSection;