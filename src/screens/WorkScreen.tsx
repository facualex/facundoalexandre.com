import React from 'react';
import styled from 'styled-components'
import hexToRGB from 'hex-rgb'
import Section from '../layout/Section';
import Anima from '../components/Anima';
import { useInView } from 'react-intersection-observer';

const AnimatedContent = styled(Anima)<{ marginTop?: string }>`
    display: flex;
    flex-direction: column;
    margin-top: ${({ marginTop }) => marginTop ? marginTop : undefined};    
    width: 65%;
`;

const SectionTitle = styled.h1`
    display: flex;
    font-size: 25px; 
    font-weight: bold;
    color: ${({ theme, color }) => color ? color : hexToRGB(theme.colors.white, { format: 'css', alpha: 0.8 })};
`

const WorkDisplayContainer = styled.div`
    display: flex;
    width: 100%:
    background-color: blue;
    margin-top: 2rem;
    position: relative;
`

const WorkItem = styled.div`
    flex: 1;
    height: 250px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.darkerBackground};

    &:not(:last-child) {
        margin-right: 1rem;
    }
`

const SoonMessageStrip = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 13px;
    font-weight: lighter;
    background-color: ${({ theme }) => theme.colors.background};
    position: absolute;
    top: calc(50% - 2rem);
    left: 0;
    right: 0;
`

const Text = styled.p<{ withMargin?: boolean }>`
    font-size: 14px;
    color: ${({ theme }) => hexToRGB(theme.colors.white, { format: 'css', alpha: 0.3 })};    
    line-height: 20px;
    margin: auto;
    margin-top: ${({ withMargin = true }) => withMargin ? '1rem' : undefined};    
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
`

const ButtonBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};    
    width: 10.3rem;
    height: 2.6rem;
    margin-top: 1.5rem;
    transition: width 0.3s, height 0.3s;

    &:hover {
        width: 10.6rem;
        height: 2.8rem;
    }

    &:not(:last-child) {
        margin-right: 1rem;
    }

`

const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};    
    background-color: ${({ theme }) => theme.colors.background};    
    width: 10rem;
    height: 2.3rem;
    text-decoration: none;
`

function Work() {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.7,
        triggerOnce: true,
    });

    return (
        <Section ref={ref} visibility={inView ? 'visible' : 'hidden'} id="work" withSeparator height="70vh">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <AnimatedContent animate={inView} marginTop="4.5rem" animationName="FadeIn" animationDuration={1000}>
                        <SectionTitle>MY WORK</SectionTitle>
                        <WorkDisplayContainer>
                            <SoonMessageStrip>
                                Soon... Work in progress.
                            </SoonMessageStrip>
                            <WorkItem></WorkItem>
                            <WorkItem></WorkItem>
                            <WorkItem></WorkItem>
                        </WorkDisplayContainer>
                        <Text>
                            In the meantime, I encourage you to check out my Github profile and resume if you want to know more about my skills and professional experience.
                        </Text>
                        <ButtonContainer>
                            <ButtonBackground>
                                <Button href="https://github.com/facualex/" rel="noopener noreferrer" target="_blank">
                                    Github
                                </Button>
                            </ButtonBackground>
                            <ButtonBackground>
                                <Button>
                                    Resume
                                </Button>
                            </ButtonBackground>
                        </ButtonContainer>
                </AnimatedContent>
            </div>
        </Section>
    )
}

export default Work;