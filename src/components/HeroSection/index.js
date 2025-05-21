import React from 'react'
// import styled from 'styled-components'
import { Bio } from '../../data/constants';
import TypewriterComponent from 'typewriter-effect';
import HeroBgAnimation from '../HeroBgAnimation';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { 
  Container,
  BgContainer,
  InnerContainer,
  LeftContainer,
  RightContainer,
  Img,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  SocialLinks,
  SocialIcon
} from './HeroStyle'

const HeroSection = () => {
    return (
        <Container id="about">
            <BgContainer>
                <HeroBgAnimation />
            </BgContainer>
            <InnerContainer>
                <LeftContainer>
                    <Title>
                        Hi, I am <br /> {Bio.name}
                    </Title>
                    <TextLoop>
                        I am a
                        <Span>
                            <TypewriterComponent
                                options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Span>
                    </TextLoop>
                    <SubTitle>{Bio.description}</SubTitle>
                    <ResumeButton href={Bio.resume} target='_blank'>Check Resume</ResumeButton>
                    <SocialLinks>
                        <SocialIcon href={Bio.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </SocialIcon>
                        <SocialIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </SocialIcon>
                        <SocialIcon href={Bio.twitter} target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </SocialIcon>
                        <SocialIcon href={Bio.instagram} target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </SocialIcon>
                        <SocialIcon href={Bio.facebook} target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </SocialIcon>
                    </SocialLinks>
                </LeftContainer>
                <RightContainer>
                    <Img src={Bio.image} alt="hero-image" />
                </RightContainer>
            </InnerContainer>
        </Container>
    )
}

export default HeroSection