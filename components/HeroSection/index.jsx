import { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroContent,
  ArrowRight,
  ArrowForward,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src="/videos/video.mp4"
          type="/video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Signup for a new account today and receive $250 in credit towards your
          next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary
            dark
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
