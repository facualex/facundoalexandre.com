import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import breakpoint from '../config/breakpoints';
import { useTranslation } from 'react-i18next';

type AvailableLanguage = "English" | "Español";

type LanguageList = AvailableLanguage[];

const defaultLanguages: LanguageList = [
    "English",
    "Español",
]

interface LanguageProps {
    languages?: LanguageList,
    onClick?: () => void;
    onSelect: () => void;
}

interface SelectorState {
    selected: string;
    isOpen: boolean;
}

function getInitialState(languages: LanguageList): SelectorState {
    return {
        selected: languages[0],
        isOpen: false,
    }
}

const Wrapper = styled.div`
   position: fixed;
   top: 1rem;
   right: 10rem;
   z-index: 999;
   cursor: pointer;
   width: 2.5rem;

    @media only screen and ${breakpoint.device.xs} {
        position: absolute;
        top: 4rem;
        right: calc(50% - (2.5rem / 2));
    }

    @media only screen and ${breakpoint.device.sm} {
        position: absolute;
        top: 4rem;
        right: calc(50% - (2.5rem / 2));
    }

    @media only screen and ${breakpoint.device.lg} {
        position: fixed;
        top: 1rem;
        right: 10rem;
    }

`

const SelectorContainer = styled.li`
   display: flex;
   width: 100%;
   justify-content: center;
   align-items: center;
   padding: 1rem 2.5rem;
   border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
   color: ${({ theme }) => `${theme.colors.primary}`};
   background-color: ${({ theme }) => `${theme.colors.background}`};

    @media only screen and ${breakpoint.device.xs} {
        padding: 0.5rem 2rem;
        border: ${({ theme }) => `1px solid ${theme.colors.icon}`};
        color: ${({ theme }) => `${theme.colors.icon}`};
    }

    @media only screen and ${breakpoint.device.sm} {
        padding: 0.5rem 2rem;
        border: ${({ theme }) => `1px solid ${theme.colors.icon}`};
        color: ${({ theme }) => `${theme.colors.icon}`};
    }

    @media only screen and ${breakpoint.device.lg} {
        border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
        color: ${({ theme }) => `${theme.colors.primary}`};
        padding: 1rem 2.5rem;
    }

`

const DropdownIcon = styled(Icon)``

const LanguageListing = styled.ul`
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
    list-style: none;
    background-color: yellow;
`

const Language = styled.li`
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    width: 100%;
   padding: 1rem 2.5rem;
   border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
   color: ${({ theme }) => `${theme.colors.primary}`};
   background-color: ${({ theme }) => `${theme.colors.background}`};
   cursor: pointer;
   z-index: 999;

    @media only screen and ${breakpoint.device.xs} {
        padding: 0.5rem 2rem;
    }

    @media only screen and ${breakpoint.device.sm} {
        padding: 0.5rem 2rem;
    }

    @media only screen and ${breakpoint.device.lg} {
        padding: 1rem 2.5rem;
    }

`

const LanguageName = styled.span`
    @media only screen and ${breakpoint.device.xs} {
        font-size: 0.8rem;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 1rem;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 1rem;
    }

`

function ChangeLanguage({ languages = defaultLanguages, onClick, onSelect }: LanguageProps) {
    const [state, setState] = useState<SelectorState>(getInitialState(languages))
    const { selected, isOpen } = state;
    const { i18n } = useTranslation()

    useEffect(() => {
        const languagePreset = localStorage.getItem("language");

        if (languagePreset && languages.includes(languagePreset as AvailableLanguage)) {
            setState(prevState => ({ ...prevState, selected: languagePreset }))
        } else {
            setState(prevState => ({ ...prevState, selected: "English" }))
        }
    }, [])

    const toggleOpen = () => {
        setState(prevState => ({ ...prevState, isOpen: !isOpen }));
    }

    const selectLanguage = async (languageName: AvailableLanguage) => {
        setState(prevState => ({ ...prevState, selected: languageName, isOpen: false }));
        localStorage.setItem("language", languageName);

        await i18n.changeLanguage(languageName);
    }

    return (
        <Wrapper>
                <LanguageListing>
                    <SelectorContainer onClick={() => {
                        toggleOpen();

                        if (onClick) {
                            onClick();
                        }
                    }}>
                        <LanguageName>{selected}</LanguageName>
                        <DropdownIcon icon="chevronDown" marginLeft="1rem" />
                    </SelectorContainer>

                    {isOpen ? languages.map(language => {
                        if (language !== selected) {
                            return (
                                <Language key={language} onClick={() => selectLanguage(language)}>
                                    <LanguageName>
                                        {language}
                                    </LanguageName>
                                </Language>
                            )
                        }
                    })
                   : null}
               </LanguageListing>
        </Wrapper>
    )
}

export default ChangeLanguage;