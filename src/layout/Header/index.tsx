import React from 'react'
import { HeaderContainer, NavigationContainer, NavigationList, NavigationItem, NavigationLink } from './styles'

function Navigation() {
    return (
        <NavigationContainer>
            <NavigationList>
                <NavigationItem selected>
                    <NavigationLink href='#home'>
                        HOME
                    </NavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <NavigationLink href="#about">
                        ABOUT
                    </NavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <NavigationLink href="#work">
                        WORK
                    </NavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <NavigationLink href="#contact">
                        CONTACT
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