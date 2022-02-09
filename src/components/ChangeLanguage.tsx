import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';

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
`

const SelectorContainer = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;
   align-items: center;
   padding: 1rem 2.5rem;
   border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
   color: ${({ theme }) => `${theme.colors.primary}`};
   background-color: ${({ theme }) => `${theme.colors.background}`};
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
`

const LanguageName = styled.span`
`

function ChangeLanguage({ languages = defaultLanguages, onClick, onSelect }: LanguageProps) {
    const [state, setState] = useState<SelectorState>(getInitialState(languages))
    const { selected, isOpen } = state;

    const toggleOpen = () => {
        setState(prevState => ({ ...prevState, isOpen: !isOpen }));
    }

    const selectLanguage = (languageName: AvailableLanguage) => {
        setState(prevState => ({ ...prevState, selected: languageName, isOpen: false }));
    }

    return (
        <Wrapper>
            <SelectorContainer onClick={() => {
                toggleOpen();

                if (onClick) {
                    onClick();
                }
            }}>
                <LanguageName>{selected}</LanguageName>
                <DropdownIcon icon="chevronDown" marginLeft="1rem" />
            </SelectorContainer>
            {isOpen ? (
                <LanguageListing>
                    {languages.map(language => {
                        if (language !== selected) {
                            return (
                                <Language key={language} onClick={() => selectLanguage(language)}>
                                    <LanguageName>
                                        {language}
                                    </LanguageName>
                                </Language>
                            )
                        }
                    })}
                </LanguageListing>
            ) : null}
        </Wrapper>
    )
}

export default ChangeLanguage;