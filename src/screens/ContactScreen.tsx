import React from 'react';
import Form from '../components/Form';
import Section from '../layout/Section';

function Contact() {
    return (
        <Section id="contact" title="LET'S TALK" titleAlignment='center'>
            <div style={{ display: 'flex', justifyContent: "center", width: "100%" }}>
                <Form />
            </div>
        </Section>
    )
}

export default Contact;