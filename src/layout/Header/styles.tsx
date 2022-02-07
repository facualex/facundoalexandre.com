import styled from 'styled-components'
import hexToRGBA from 'hex-rgb'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1.5rem 0;
`

export const NavigationContainer = styled.nav``;

export const NavigationList = styled.ul`
    display:flex;  
    list-style:none;

    & > li:hover {
        transform: translateY(-5%);
    }

`;

export const NavigationItem = styled.li<{ selected?: boolean }>`
    transition: transform 0.3s, color 0.3s;

    transform: ${({selected, theme}) => selected ? `translateY(-5%)` : undefined} !important;

    & > a {
        color: ${({selected, theme}) => selected ? theme.colors.primary : undefined} !important;
    }

    & > a:hover {
        color: ${({theme}) => theme.colors.primary} !important;
    }

    &:not(:last-child) {
        margin-right: 1rem;
    }

    ${({ selected, theme }) => selected ? `
        &:after {
            content: "";
            position: absolute;
            top: 25px;
            background: ${theme.colors.primary} !important;
            width: 5px;
            height: 5px;
            border-radius: 100%;
            left:calc(50% - 3px);
        }
    ` : null}
`;

export const NavigationLink = styled.a`
    text-decoration: none;
    font-weight: bold;
    font-size: 12px;
    color: ${({ theme }) => hexToRGBA(theme.colors.primary, { format: 'css', alpha: 0.55 })};    
`;



