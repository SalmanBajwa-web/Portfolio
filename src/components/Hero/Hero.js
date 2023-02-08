import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a professtional web developer. I build web applications and solve
        web apps related issues. I write clean code following web apps
        standards.
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:haseebudeen@outlook.com")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
