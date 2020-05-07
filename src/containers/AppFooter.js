/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from "@xstyled/styled-components";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Container } from "../components/Container";
import { motion } from "framer-motion";

const Copyright = styled.div`
  color: light100;
  font-size: 12;
  font-family: monospace;
`;

const Socials = styled.div`
  margin-left: auto;
  margin-right: -2;
  display: flex;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55;
  width: 55;
  color: lighter;
  transition: base;
  &:hover,
  &:focus {
    outline: none;
    color: accent;
  }
`;

const currentYear = new Date().getFullYear();

const locales = {
  twitter: "My Twitter profile",
  github: "My GitHub profile",
  linkedin: "My LinkedIn profile",
  email: "Send me an email",
};

export function AppFooter() {
  return (
    <Container display="flex" alignItems="center" mt={4} pb={4}>
      <Copyright>Piyush Mehta © {currentYear}</Copyright>
      <Socials>
        <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <SocialLink
            title={locales.twitter}
            href="https://twitter.com/coderWhoKnows"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTwitter />
          </SocialLink>
        </motion.span>
        <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <SocialLink
            title={locales.github}
            href="https://github.com/piyush97"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </SocialLink>
        </motion.span>

        <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <SocialLink
            title={locales.linkedin}
            href="https://www.linkedin.com/in/piyush24"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </SocialLink>
        </motion.span>

        <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <SocialLink
            title={locales.email}
            href="mailto:me@piyushmehta.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaEnvelope />
          </SocialLink>
        </motion.span>
      </Socials>
    </Container>
  );
}