import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faGithub as github, faLinkedin as linkedin } from "@fortawesome/free-brands-svg-icons"
import { faFileInvoice as resume, faChevronUp as chevronUp } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type AvailableIcons = "github" | "resume" | "linkedin" | "chevronUp";

const icons: Record<AvailableIcons, IconDefinition> = {
    github,
    linkedin,
    resume, 
    chevronUp,
}

interface IconProps {
    icon: AvailableIcons;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
}

function Icon({ icon, ...props }: IconProps & FontAwesomeIconProps) {
    const { marginTop, marginRight, marginBottom, marginLeft } = props

    const iconStyle = {
        marginTop: marginTop ? marginTop : undefined,
        marginRight: marginRight ? marginRight : undefined,
        marginLeft: marginLeft ? marginLeft : undefined,
        marginBottom: marginBottom ? marginBottom : undefined,
    }

    const selectedIcon = icons[icon];

    return (
        <FontAwesomeIcon icon={selectedIcon} {...props} style={iconStyle} />
    )
}

export default Icon;