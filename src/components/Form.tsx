import React, { InputHTMLAttributes, useState } from 'react'
import hexToRGB from 'hex-rgb'
import styled from 'styled-components'
import breakpoint from '../config/breakpoints'
import { useTranslation } from 'react-i18next'

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    background-color: ${({ theme }) => theme.colors.formBackground};
    border-radius: 10px;
    margin-top: 2rem;
    padding: 2rem 3rem;

    @media only screen and ${breakpoint.device.xs} {
        padding: 1.5rem 2.5rem;
        min-width: 60vw;
    }

    @media only screen and ${breakpoint.device.sm} {
        padding: 2rem 3rem;
        min-width: auto;
    }

    @media only screen and ${breakpoint.device.lg} {
        padding: 2rem 3rem;
        min-width: 35vw;
    }
`


const FormTitle = styled.span`
    color: ${({ theme }) => hexToRGB(theme.colors.white, { format: 'css', alpha: 0.8 })};
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;

    @media only screen and ${breakpoint.device.xs} {
        font-size: 13px;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 15px;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 15px;
    }
`

const InputGroup = styled.div`
    display: flex;
    margin-top: 1.5rem;

    @media only screen and ${breakpoint.device.xs} {
        flex-direction: column;
        margin-top: 0.8rem;
    }

    @media only screen and ${breakpoint.device.sm} {
        margin-top: 1.5rem;
       flex-direction: row;
    }

    @media only screen and ${breakpoint.device.lg} {
      margin-top: 1.5rem;
      flex-direction: row;
    }

`

const InputWrapper = styled.div<{ marginTop?: string, marginBottom?: string, marginLeft?: string, marginRight?: string}>`
    display: flex;
    flex-direction: column;
    margin-top: ${({ marginTop }) => marginTop ? marginTop : undefined};
    margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : undefined};
    margin-right: ${({ marginRight }) => marginRight ? marginRight : undefined};
    margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : undefined};

    @media only screen and ${breakpoint.device.xs} {
        margin-top: 1.2rem;
        margin-bottom: 0rem;
    }

    @media only screen and ${breakpoint.device.sm} {
        margin-top: ${({ marginTop }) => marginTop ? marginTop : undefined};
        margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : undefined};
    }

    @media only screen and ${breakpoint.device.lg} {
        margin-top: ${({ marginTop }) => marginTop ? marginTop : undefined};
        margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : undefined};
    }
`


const InputElement = styled.input<{ backgroundColor?: string }>`
    background-color: ${({ theme, backgroundColor }) => backgroundColor ? backgroundColor : theme.colors.formBackground};
    border: ${({ theme }) => `1px solid ${hexToRGB(theme.colors.primary, { format: 'css', alpha: 0.4 })}`};
    border-radius: 10px;
    color: white;
    outline: none;
    padding: 1rem 1rem;

    @media only screen and ${breakpoint.device.xs} {
        border-radius: 5px;
    }

    @media only screen and ${breakpoint.device.sm} {
        border-radius: 10px;
    }

    @media only screen and ${breakpoint.device.lg} {
        border-radius: 10px;
    }

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

    @media only screen and ${breakpoint.device.xs} {
        font-size: 10px;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 13px;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 13px;
    }

`

const ButtonGroupContainer = styled.div`
    width: 100%;
    margin-top: 4rem;

    @media only screen and ${breakpoint.device.xs} {
        margin-top: 1rem;
    }

    @media only screen and ${breakpoint.device.sm} {
        margin-top: 4rem;
    }

    @media only screen and ${breakpoint.device.lg} {
        margin-top: 4rem;
    }

`

const ButtonGroup = styled.div`
    display: flex;
    margin-top: 1rem;

    @media only screen and ${breakpoint.device.xs} {
        flex-direction: column;
        align-items: center;
    }

    @media only screen and ${breakpoint.device.sm} {
        flex-direction: row;
        align-items: stretch;
    }

    @media only screen and ${breakpoint.device.lg} {
        flex-direction: row;
        align-items: stretch;
    }

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
    width: 100%;
    

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

    @media only screen and ${breakpoint.device.xs} {
        font-size: 10px;

        &:not(:last-child) {
            margin-right: 0;
            margin-bottom: 5px;
        }
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 13px;
        &:not(:last-child) {
            margin-right: 1rem;
            margin-bottom: 0;
        }


    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 13px;
        &:not(:last-child) {
            margin-right: 1rem;
            margin-bottom: 0;
        }
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
    const { t: translate } = useTranslation();

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
            <FormTitle>{translate("form.title")}</FormTitle>
            <InputGroup>
                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginRight: '1rem' }}>
                    <Input name="name" label={translate("form.nameLabel")} onChange={setInput} placeholder={translate("form.namePlaceholder")} marginTop="1rem" marginBottom="2rem" />
                    <Input name="email" label={translate("form.emailLabel")} onChange={setInput} placeholder={translate("form.emailPlaceholder")} marginTop="1rem" />
                </div>
                <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <Input textarea name="message" label={translate("form.messageLabel")} onChange={setInput} placeholder={translate("form.messagePlaceholder")} marginTop="1rem" />
                </div>
            </InputGroup>
            <ButtonGroupContainer>
                <Label><b>{translate("form.subjectLabel")}</b></Label>
                <ButtonGroup>
                    <Button id="freelance" selected={subject === "freelance"} onClick={selectOption}>{translate("form.subject1")}</Button>
                    <Button id="consulting" selected={subject === "consulting"} onClick={selectOption}>{translate("form.subject2")}</Button>
                    <Button id="job" selected={subject === "job"} onClick={selectOption}>{translate("form.subject3")}</Button>
                    <Button id="other" selected={subject === "other"} onClick={selectOption}>{translate("form.subject4")}</Button>
                </ButtonGroup>
                <SendButton canSubmit={canSubmit} disabled={!canSubmit}>
                    {translate("form.send")}
                </SendButton>
            </ButtonGroupContainer>
        </FormContainer>
    )
}

export default Form;