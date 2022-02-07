import React from 'react';
import hexToRGB from 'hex-rgb';
import styled, { useTheme } from 'styled-components';
import Anima from '../components/Anima';
import Section from '../layout/Section';
import { useInView } from 'react-intersection-observer';
import breakpoint from "../config/breakpoints"

const AnimatedContent = styled(Anima)<{ marginTop?: string }>`
    display: flex;
    margin-top: ${({ marginTop }) => marginTop ? marginTop : undefined};    
    width: 65%;

    @media only screen and ${breakpoint.device.xs} {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    @media only screen and ${breakpoint.device.sm} {
        flex-direction: row;
        align-items: flex-start;
        width: 65%;
    }

    @media only screen and ${breakpoint.device.lg} {
        flex-direction: row;
        align-items: flex-start;
        width: 65%;
    }

`;

const SectionTitle = styled.h1`
    display: flex;
    font-size: 25px; 
    font-weight: bold;
    color: ${({ theme, color }) => color ? color : hexToRGB(theme.colors.white, { format: 'css', alpha: 0.8 })};

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

const InterestsTitle = styled.h2`
    font-size: 15px; 
    font-weight: bold;
    color: ${({ theme, color }) => color ? color : hexToRGB(theme.colors.white, { format: 'css', alpha: 0.65 })};
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`

const Text = styled.p<{ withMargin?: boolean }>`
    font-size: 14px;
    color: ${({ theme }) => hexToRGB(theme.colors.white, { format: 'css', alpha: 0.3 })};    
    margin-top: ${({ withMargin = true }) => withMargin ? '1rem' : undefined};    
    line-height: 20px;
`

const HighlightText = styled.span<{ color?: string, fontSize?: string, marginRight?: string }>`
    font-weight: bold;
    font-size: ${({ theme, fontSize }) => fontSize ? fontSize : "inherit"};    
    color: ${({ theme, color }) => color ? color : theme.colors.textHighlight};    
    margin-right: ${({ theme, marginRight }) => marginRight ? marginRight : undefined};    
`

const PhotoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 18%;    
    margin-left: 3rem;
    position: relative;

    @media only screen and ${breakpoint.device.xs} {
        width: 50%;
        margin-left: 0;
    }

    @media only screen and ${breakpoint.device.sm} {
        width: 18%;
        margin-left: 3rem;
    }

    @media only screen and ${breakpoint.device.lg} {
        width: 18%;
        margin-left: 3rem;
    }
`

const MyPhoto = styled.img`
    width: 100%;
    height: auto;
    border: ${({ theme }) => `7px solid ${hexToRGB(theme.colors.primary, { format: 'css', alpha: 0.75 })}`};    
    border-radius: 3px;
    box-sizing: border-box;
`

const DarkOverlay = styled.div`
  background: rgba(0,0,0,0.37);
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  transition: background 0.3s;

  &:hover {
    background: transparent; 
  }
`

const TechListContainer = styled.div`
    margin: 15px;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;

    @media only screen and ${breakpoint.device.xs} {
        flex: undefined;
        margin-bottom: 1.5rem;
    }

    @media only screen and ${breakpoint.device.sm} {
        flex: 1;
        margin-bottom: 0;
    }

    @media only screen and ${breakpoint.device.lg} {
        flex: 1;
        margin-bottom: 0;
    }

`

const ColumnContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 0;

    @media only screen and ${breakpoint.device.xs} {
        align-items: center;
    }

    @media only screen and ${breakpoint.device.sm} {
        align-items: flex-start;
    }

    @media only screen and ${breakpoint.device.lg} {
        align-items: flex-start;
    }

`

function TechList() {
    const { colors } = useTheme();

    return (
                    <TechListContainer>
                        <Row>
                            <Column>
                                <ColumnContent>
                                    <Text withMargin={false}>
                                        <HighlightText
                                            color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                            fontSize="22px"
                                            marginRight='5px'
                                        >
                                            ~
                                        </HighlightText>
                                        JavaScript
                                    </Text>
                                </ColumnContent>
                            </Column>
                            <Column>
                                <ColumnContent>
                                    <Text withMargin={false}>
                                        <HighlightText
                                            color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                            fontSize="22px"
                                            marginRight='5px'
                                        >
                                            ~
                                        </HighlightText>
                                        ReactJS
                                    </Text>
                                </ColumnContent>
                            </Column>
                            <Column>
                                <ColumnContent>
                                    <Text withMargin={false}>
                                        <HighlightText
                                            color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                            fontSize="22px"
                                            marginRight='5px'
                                        >
                                            ~
                                        </HighlightText>
                                        Express Framework
                                    </Text>
                                </ColumnContent>
                            </Column>
                            <Column>
                                <ColumnContent>
                                    <Text withMargin={false}>
                                        <HighlightText
                                            color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                            fontSize="22px"
                                            marginRight='5px'
                                        >
                                            ~
                                        </HighlightText>
                                        React Native
                                    </Text>
                                </ColumnContent>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <ColumnContent>
                                    <Text withMargin={false}>
                                        <HighlightText
                                            color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                            fontSize="22px"
                                            marginRight='5px'
                                        >
                                            ~
                                        </HighlightText>
                                        TypeScript
                                    </Text>
                                </ColumnContent>
                            </Column>
                            <Column>
                                <ColumnContent>
                                    <Text withMargin={false}>
                                        <HighlightText
                                            color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                            fontSize="22px"
                                            marginRight='5px'
                                        >
                                            ~
                                        </HighlightText>
                                        Gatsby
                                    </Text>
                                </ColumnContent>
                            </Column>
                            <Column>
                                <ColumnContent>
                                    <Text withMargin={false}>
                                        <HighlightText
                                            color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                            fontSize="22px"
                                            marginRight='5px'
                                        >
                                            ~
                                        </HighlightText>
                                        Styled Components
                                    </Text>
                                </ColumnContent>
                            </Column>
                            <Column></Column>
                        </Row>
                    </TechListContainer>

    )
}

function MyInterests() {
    const { colors } = useTheme()

    return (
        <div style={{ width: "100%", marginTop: '2.5rem'}}>
            <Row>
                <Column>
                    <ColumnContent>
                        <InterestsTitle>PERSONAL INTERESTS</InterestsTitle>
                        <Text>
                            <HighlightText
                                color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                fontSize="22px"
                                marginRight='5px'
                            >
                                &gt;
                            </HighlightText>
                            Travelling
                        </Text>
                        <Text>
                            <HighlightText
                                color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                fontSize="22px"
                                marginRight='5px'
                            >
                                &gt;
                            </HighlightText>
                            Barbecue
                        </Text>
                        <Text>
                            <HighlightText
                                color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                fontSize="22px"
                                marginRight='5px'
                            >
                                &gt;
                            </HighlightText>
                            Math & Statistics
                        </Text>

                    </ColumnContent>
                </Column>
                <Column>
                    <ColumnContent>
                        <InterestsTitle>TECH I WOULD LOVE TO LEARN</InterestsTitle>
                        <Text>
                            <HighlightText
                                color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                fontSize="22px"
                                marginRight='5px'
                            >
                                &gt;
                            </HighlightText>
                            Travelling
                        </Text>
                        <Text>
                            <HighlightText
                                color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                fontSize="22px"
                                marginRight='5px'
                            >
                                &gt;
                            </HighlightText>
                            Barbecue
                        </Text>
                        <Text>
                            <HighlightText
                                color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                fontSize="22px"
                                marginRight='5px'
                            >
                                &gt;
                            </HighlightText>
                            Math & Statistics
                        </Text>
                    </ColumnContent>
                </Column>
                <Column>
                    <ColumnContent>
                        <InterestsTitle>PROFESSIONAL INTERESTS</InterestsTitle>
                        <Text>
                            <HighlightText
                                color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                fontSize="22px"
                                marginRight='5px'
                            >
                                &gt;
                            </HighlightText>
                            Travelling
                        </Text>
                        <Text>
                            <HighlightText
                                color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                fontSize="22px"
                                marginRight='5px'
                            >
                                &gt;
                            </HighlightText>
                            Barbecue
                        </Text>
                        <Text>
                            <HighlightText
                                color={hexToRGB(colors.primary, { format: 'css', alpha: 0.7 })}
                                fontSize="22px"
                                marginRight='5px'
                            >
                                &gt;
                            </HighlightText>
                            Math & Statistics
                        </Text>
                    </ColumnContent>
                </Column>
            </Row>
        </div>
    )
}

function About() {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <Section ref={ref} id="about" visibility={inView ? 'visible' : "hidden"} withSeparator height='auto'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <AnimatedContent animate={inView} marginTop="4.5rem" animationName="FadeInLeft">
                        <TextContainer>
                            <SectionTitle>ABOUT ME</SectionTitle>
                            <Text>
                                Hello there! My name is <HighlightText>Facundo</HighlightText>, a very common name in Argentina and Uruguay.
                                <HighlightText> Alexandre</HighlightText> is my last name, a very common first name in some countries of Latin America,
                                so people often think that’s also part of my first name.
                            </Text>
                            <Text>
                                I love <HighlightText>web development and programming</HighlightText> in general. My interesest in all computer related
                                stuff started a long time ago, at a tender age of 5 when I started <HighlightText>“helping”</HighlightText> my father to repair computers.
                            </Text>
                            <Text>
                                Today, I spend my time developing (and sometimes designing) web applications and reliable web systems.
                            </Text>
                            <Text>
                                A <HighlightText>few technologies that I frequently use</HighlightText> are:
                            </Text>
                            <TechList />
                        </TextContainer>
                        <PhotoContainer>
                            <MyPhoto src="/me.png" />
                            <DarkOverlay />
                        </PhotoContainer>
                </AnimatedContent>
                <AnimatedContent animate={inView} animationName="FadeInRight">
                    <MyInterests />
                </AnimatedContent>
            </div>
       </Section>
    )
}

export default About;

  
