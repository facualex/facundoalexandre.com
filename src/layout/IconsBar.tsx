import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components'
import Icon from '../components/Icon'
import hexToRGBA from 'hex-rgb'
import breakpoint from '../config/breakpoints';
import { useTranslation } from 'react-i18next';

const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 35%;
    left: 0;
    padding-left: 1rem;
    z-index: 999;

    @media only screen and ${breakpoint.device.xs} {
        padding-left: 0;
    }

    @media only screen and ${breakpoint.device.sm} {
        padding-left: 1rem;
    }

    @media only screen and ${breakpoint.device.lg} {
        padding-left: 1rem;
    }
`

const Separator = styled.div`
    border-radius: 100%;
    background-color: ${({ theme }) => hexToRGBA(theme.colors.icon, { format: 'css', alpha: 0.5 })};    
    width: 3px;
    height: 3px;
    margin: 1.5rem 0;
`

const StyledIcon = styled(Icon)`
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        color: ${({theme}) => theme.colors.primary};
        transform: scale(1.1);
    }
`

function IconsBar() {
    const { colors } = useTheme()
    const { i18n } = useTranslation()
    const [currentLanguage, setCurrentLanguage] = useState<string | undefined>("English");


    useEffect(() => {
        setCurrentLanguage( i18n.language || "English");
    }, [i18n.language]);

    const selectedResume = currentLanguage === "Español" ? "spa_cv.pdf" : "eng_cv.pdf";

    return (
        <IconsContainer>
            <a href="https://github.com/facualex" target="_blank" rel="noopener noreferrer" >
                <StyledIcon icon="github" color={colors.icon} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/facualex/" target="_blank" rel="noopener noreferrer" >
                <StyledIcon icon="linkedin" color={colors.icon} size="lg" marginTop="1.5rem" />
            </a>
            <Separator />

            <a href={`./${selectedResume}`} style={{ display: "flex", alignItems: "center", textDecoration: "none" }} rel="noopener noreferrer" target="_blank">
                <StyledIcon icon="resume" color={colors.icon} size="lg" marginRight="5px" marginLeft="17px" />
                <span style={{ fontSize: "10px", color: colors.icon }}>CV</span>
            </a>
        </IconsContainer>
    )
}

export default IconsBar;