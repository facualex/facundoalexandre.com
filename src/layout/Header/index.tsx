import React from 'react'
import { useTranslation } from 'react-i18next'
import { HeaderContainer, NavigationContainer, NavigationList, NavigationItem, NavigationLink } from './styles'

function Navigation() {
    const { t: translate } = useTranslation()

    return (
        <NavigationContainer>
            <NavigationList>
                <NavigationItem selected>
                    <NavigationLink href='#home'>
                        {translate("navigation.home")}
                    </NavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <NavigationLink href="#about">
                        {translate("navigation.about")}
                    </NavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <NavigationLink href="#work">
                        {translate("navigation.work")}
                    </NavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <NavigationLink href="#contact">
                        {translate("navigation.contact")}
                    </NavigationLink>
                </NavigationItem>
            </NavigationList>
        </NavigationContainer>

    )
}

function Header() {
     return (
        <HeaderContainer>
            <Navigation />
        </HeaderContainer>
     )
}

export default Header;