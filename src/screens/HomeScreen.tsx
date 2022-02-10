import React from 'react';
import Anima from '../components/Anima';
import styled from 'styled-components'
import Section from '../layout/Section';
import breakpoint from '../config/breakpoints';
import Header from '../layout/Header';
import hexToRGBA from 'hex-rgb'
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const HomeScreenWrapper = styled.div`
    display: inline-block;
    margin-left: 25%;
    margin-top: 15vh;

    @media only screen and ${breakpoint.device.xs} {
        margin-top: 10vh;
    }

    @media only screen and ${breakpoint.device.sm} {
        margin-top: 13vh;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 15px;
    }
`

const HighlightText = styled.span`
    font-weight: bold;
    font-size: inherit;
    color: ${({ theme }) => theme.colors.textHighlight};    
`

const PreTitle = styled.span`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};    

    @media only screen and ${breakpoint.device.xs} {
        font-size: 14px;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 16px;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 18px;
    }
`

const Title = styled.h1`
    font-size: 88px;
    color: ${({ theme }) => hexToRGBA(theme.colors.white, { format: 'css', alpha: 0.8 })};    

    @media only screen and ${breakpoint.device.xs} {
        font-size: 55px;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 66px;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 88px;
    }
`

const Subtitle = styled.h2`
    font-size: 54px;
    color: ${({ theme }) => hexToRGBA(theme.colors.white, { format: 'css', alpha: 0.3 })};    

    @media only screen and ${breakpoint.device.xs} {
        font-size: 30px;
        width: 70vw;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 47px;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 54px;
    }
`

const Text = styled.p`
    font-size: 16px;
    color: ${({ theme }) => hexToRGBA(theme.colors.white, { format: 'css', alpha: 0.3 })};    
    font-weight: lighter;
    margin-top: 1rem;
    line-height: 23px;

    @media only screen and ${breakpoint.device.xs} {
        font-size: 14px;
        width: 70vw;    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 16px;
        width: 50vw;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 16px;
        width: 50vw;
    }
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

const PatternImage = styled.img`
   z-index: -10; 
   position: absolute;
   top: -38rem;
   right: -30rem;
   width: 90rem;
   transform: rotate(50deg);
   opacity: 0.4;

    @media only screen and ${breakpoint.device.xs} {
        top: -10rem;
        right: -10rem;
        width: 40rem;
    }

    @media only screen and ${breakpoint.device.sm} {
        top: -38rem;
        right: -30rem;
        width: 90rem;
    }

    @media only screen and ${breakpoint.device.lg} {
        top: -38rem;
        right: -30rem;
        width: 90rem;
    }
`

function Home() {
    const { t: translate } = useTranslation();

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.7,
        triggerOnce: true,
    });

    return (
        <Section visibility={inView ? "visible" : "hidden"} ref={ref} id="home" withSeparator>
            <Header />
            <HomeScreenWrapper>
                <Anima animate={inView} animationName="FadeInLeft">
                    <PreTitle>{translate('home.hello')}</PreTitle>
                    <Title>Facundo.</Title>
                </Anima>
                <Anima animate={inView} animationName="FadeIn" animationDelay={1000}>
                    <Subtitle>{translate('home.subtitle')}</Subtitle>
                </Anima>
                <Anima animate={inView} animationName="FadeIn" animationDelay={1500} animationDuration={2000}>
                    <Text>
                        {translate('home.text.1')}
                        <HighlightText>
                            {translate("home.text.highlight1")}
                        </HighlightText>
                        {translate("home.text.2")}
                        <HighlightText>
                            {translate("home.text.highlight2")}
                        </HighlightText>
                    </Text>
                    <ButtonBackground>
                        <Button href="#contact">
                            {translate("home.cta")}
                        </Button>
                    </ButtonBackground>
                </Anima>
            </HomeScreenWrapper>
            <PatternImage src="./pattern.png" />
        </Section>
    )
}

export default Home;
