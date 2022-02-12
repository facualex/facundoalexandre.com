import React from 'react';
import styled from 'styled-components'
import Form from '../components/Form';
import Section from '../layout/Section';
import breakpoint from '../config/breakpoints'
import hexToRGB from 'hex-rgb';
import { useTranslation } from 'react-i18next';

const SectionTitle = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 25px; 
    font-weight: bold;
    color: ${({ theme, color }) => color ? color : hexToRGB(theme.colors.white, { format: 'css', alpha: 0.8 })};
    margin-top: 3rem;

    @media only screen and ${breakpoint.device.xs} {
        font-size: 20px; 
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 20px; 
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 25px; 
    }

`

function Contact() {
    const { t: translate } = useTranslation();

    return (
        <Section id="contact">
            <SectionTitle>{translate("form.sectionTitle")}</SectionTitle>
            <div style={{ display: 'flex', justifyContent: "center", width: "100%" }}>
                <Form />
            </div>
        </Section>
    )
}

export default Contact;