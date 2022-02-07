import React from 'react';
import Home from '../screens/HomeScreen'
import About from '../screens/AboutScreen'
import Work from '../screens/WorkScreen'
import Contact from '../screens/ContactScreen'
import IconsBar from '../layout/IconsBar';
import styled from 'styled-components';
import Icon from '../components/Icon';
import hexToRGB from 'hex-rgb';
import breakpoint from '../config/breakpoints'

const GoUpButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.icon};    
    border-radius: 100%;
    height: 2.5rem;
    width: 2.5rem;
    position: fixed;
    bottom: 3rem;
    right: 4rem;
    z-index: 999;
    color: white;

    @media only screen and ${breakpoint.device.xs} {
        bottom: 2rem;
        right: 2rem;
     }

    @media only screen and ${breakpoint.device.sm} {
        bottom: 3rem;
        right: 4rem;
    }

    @media only screen and ${breakpoint.device.lg} {
        bottom: 3rem;
        right: 4rem;
    }

`

const BackgroundFirstName = styled.span`
    font-weight: bold;
    font-size: 38px;
    color: ${({theme}) => hexToRGB(theme.colors.primary, { format: 'css', alpha: 0.03 })};

    @media only screen and ${breakpoint.device.xs} {
        font-size: 28px;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 33px;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 38px;
    }
`

const BackgroundLastName = styled.span`
    font-weight: bold;
    font-size: 38px;
    color: ${({theme}) => hexToRGB(theme.colors.primary, { format: 'css', alpha: 0.03 })};

    @media only screen and ${breakpoint.device.xs} {
        font-size: 28px;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 33px;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 38px;
    }
`

const NameContainer = styled.div`
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 34%;
        left: 5%;

    @media only screen and ${breakpoint.device.xs} {
        top: 40%;
        left: 12%;
    }

    @media only screen and ${breakpoint.device.sm} {
        top: 34%;
        left: 5%;
    }

    @media only screen and ${breakpoint.device.lg} {
        top: 34%;
        left: 5%;
    }

`

const SkipNavigationButton = styled.a`
   position: absolute;
   left: 0.5rem;
   padding: 0.5rem 1.5rem;
   border-radius: 0 0 0.25rem 0.25rem;
   transform: translateY(-120%);
   color: ${({ theme }) => theme.colors.primary};
   border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
   background-color: ${({ theme }) => theme.colors.formBackground};
   text-decoration: none;
   outline: none;
   transition: transform 325ms ease-in;


   &:focus {
        transform: translateY(0);
   }
`

function GoUpButton() {
    return (
        <a href="#home" style={{ cursor: "pointer" }}>
            <GoUpButtonWrapper>
                <Icon icon="chevronUp" />
            </GoUpButtonWrapper>
        </a>
    )
}

function App() {
    return (
        <>
            <SkipNavigationButton href="#about">Skip navigation</SkipNavigationButton>
            <IconsBar />
            <NameContainer>
                <BackgroundFirstName>
                    FACUNDO
                </BackgroundFirstName>
                <BackgroundLastName>
                    ALEXANDRE
                </BackgroundLastName>
            </NameContainer>
            <GoUpButton />
            <Home />
            <About />
            <Work />
            <Contact />
        </>
    )
}

export default App