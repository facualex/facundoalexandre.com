import React, { InputHTMLAttributes, useState } from 'react'
import hexToRGB from 'hex-rgb'
import styled from 'styled-components'

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 60vh;
    background-color: ${({ theme }) => theme.colors.formBackground};
    border-radius: 10px;
    margin-top: 2rem;
    padding: 2rem 3rem;
`

const FormTitle = styled.span`
    color: ${({ theme }) => hexToRGB(theme.colors.white, { format: 'css', alpha: 0.8 })};
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
`

const InputWrapper = styled.div<{ marginTop?: string, marginBottom?: string, marginLeft?: string, marginRight?: string}>`
    display: flex;
    flex-direction: column;
    margin-top: ${({ marginTop }) => marginTop ? marginTop : undefined};
    margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : undefined};
    margin-right: ${({ marginRight }) => marginRight ? marginRight : undefined};
    margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : undefined};
`


const InputElement = styled.input<{ backgroundColor?: string }>`
    background-color: ${({ theme, backgroundColor }) => backgroundColor ? backgroundColor : theme.colors.formBackground};
    border: ${({ theme }) => `1px solid ${hexToRGB(theme.colors.primary, { format: 'css', alpha: 0.4 })}`};
    border-radius: 10px;
    color: white;
    outline: none;
    padding: 1rem 1rem;

    &:focus {
        border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
    }
`

const TextArea = styled.textarea<{ backgroundColor?: string }>`
    background-color: ${({ theme }) => hexToRGB(theme.colors.primary, { format: 'css', alpha: 0.05 })}};
    border: ${({ theme }) => `1px solid ${hexToRGB(theme.colors.primary, { format: 'css', alpha: 0.4 })}`};
    border-radius: 10px;
    color: white;
    outline: none;
    padding: 1rem 1rem;
    resize: none;

    &:focus {
        border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
    }
`

const Label = styled.label<{ fontSize?: string }>`
    font-size: ${({ fontSize}) => fontSize ? fontSize : "13px"};
    color: ${({ theme }) => hexToRGB(theme.colors.white, { format: 'css', alpha: 0.7 })};
    margin-bottom: 5px;
`

const ButtonGroup = styled.div`
    display: flex;
    width: 100%;
    margin-top: 1rem;
`

const Button = styled.button<{ selected?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.formBackground};
    color: ${({ theme, selected }) => hexToRGB(theme.colors.primary, { format: 'css', alpha: selected ? 1 : 0.2 })};
    border: ${({ theme, selected }) => `${selected ? "2px" : "1px"} solid ${hexToRGB(theme.colors.primary, { format: 'css', alpha: selected ? 1 : 0.2 })}`};
    font-size: 13px;
    padding: 10px 1rem;
    border-radius: 3px;
    cursor: pointer;
    outline: none;

    &:hover {
        color: ${({ theme, selected }) => hexToRGB(theme.colors.primary, { format: 'css', alpha: selected ? 1 : 0.35 })};
        border: ${({ theme, selected }) => `${selected ? "2px" : "2px"} solid ${hexToRGB(theme.colors.primary, { format: 'css', alpha: selected ? 1 : 0.35 })}`};
    }

    &:not(:last-child) {
        margin-right: 1rem;
    }

    &:focus {
        color: ${({ theme, selected }) => selected ? undefined : hexToRGB(theme.colors.primary, { format: 'css', alpha: 0.75 })};
        border: ${({ theme, selected }) => selected ? undefined : `2px solid ${hexToRGB(theme.colors.primary, { format: 'css', alpha: 0.35})}`};
    }
`

const SendButton = styled.button<{ canSubmit?: boolean }>`
    outline: none;
    display: flex;
    cursor: ${({ canSubmit }) => canSubmit ? "pointer" : "not-allowed"};
    justify-content: center;
    align-items: center;
    font-size: 13px;
    width: 80%;
    padding: 1rem 1rem;
    background-color: ${({ theme, canSubmit }) => hexToRGB(theme.colors.primary, { format: 'css', alpha: canSubmit ? 0.6 : 0.1 })};
    color: ${({ theme, canSubmit }) => hexToRGB(theme.colors.white, { format: 'css', alpha: canSubmit ? 1 : 0.2 })};
    margin: 0 auto;
    margin-top: 3rem;
    border: none;

    &:focus {
        border: 1px solid white;
    }

`

type AvailableSubjects = "freelance" | "consulting" | "job" | "other";

interface State {
    name?: string;
    email?: string;
    message?: string;
    subject?: AvailableSubjects;
    honey?: string;
}

const initialState = {
    name: undefined,
    email: undefined,
    message: undefined,
    subject: "freelance" as AvailableSubjects,
    honey: undefined,
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    placeholder?: string;
    onChange: ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    textarea?: boolean;
}

function Input({ name, label, onChange, placeholder = "Start writing here...", marginTop, marginBottom, marginLeft, marginRight, textarea = false }: InputProps) {

    return (
        <InputWrapper marginTop={marginTop} marginBottom={marginBottom} marginRight={marginRight} marginLeft={marginLeft}>
            {label ? (
                <Label htmlFor={name}>{label}</Label>
            ) : null}
            {textarea ? (
                <TextArea name={name} onChange={onChange} placeholder={placeholder} autoComplete="off" cols={10} rows={9} />
            ) : (
                <InputElement name={name} onChange={onChange} placeholder={placeholder} autoComplete="off" />
            )}
        </InputWrapper>
    )
}

function Form() {
    const [state, setState] = useState<State>(initialState)

    const { name, email, message, subject, honey } = state;

    const canSubmit = name && email && message && subject && !honey;

    const setInput = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = target.value;
        const inputName = target.name;

        setState(prevState => ({ ...prevState, [inputName]: value }));
    }

    const selectOption = ({ target }) => {
        const inputId = target.id;

        setState(prevState => ({ ...prevState, subject: inputId }));
    }

    return (
        <FormContainer>
            <FormTitle>Contact form</FormTitle>
            <div style={{ display: "flex", marginTop: "1.5rem" }}>
                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginRight: '1rem' }}>
                    <Input name="name" label="Your name" onChange={setInput} placeholder="Example: John Doe" marginTop="1rem" marginBottom="2rem" />
                    <Input name="email" label="Your email" onChange={setInput} placeholder="Example: johndoe@email.com" marginTop="1rem" />
                </div>
                <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <Input textarea name="message" label="Your message" onChange={setInput} placeholder="Write your message here..." marginTop="1rem" />
                </div>
            </div>
            <div style={{ width: "100%", marginTop: "4rem" }}>
                <Label><b>Subject</b></Label>
                <ButtonGroup>
                    <Button id="freelance" selected={subject === "freelance"} onClick={selectOption}>Freelance offer</Button>
                    <Button id="consulting" selected={subject === "consulting"} onClick={selectOption}>Consulting</Button>
                    <Button id="job" selected={subject === "job"} onClick={selectOption}>Job opportunity</Button>
                    <Button id="other" selected={subject === "other"} onClick={selectOption}>Other</Button>
                </ButtonGroup>
                <SendButton canSubmit={canSubmit} disabled={!canSubmit}>
                    Send
                </SendButton>
            </div>
        </FormContainer>
    )
}

export default Form;