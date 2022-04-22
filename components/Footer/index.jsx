import Link from "next/link";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
} from "./FooterElements";
import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <Link href="/">
                <FooterLink>How it works</FooterLink>
              </Link>
              <Link href="/">
                <FooterLink>Testimonials</FooterLink>
              </Link>
              <Link href="/">
                <FooterLink>Careers</FooterLink>
              </Link>
              <Link href="/">
                <FooterLink>Investers</FooterLink>
              </Link>
              <Link href="/">
                <FooterLink>Terms of Service</FooterLink>
              </Link>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <Link href="/">
                <FooterLink>Submit Video</FooterLink>
              </Link>
              <Link href="/">
                <FooterLink>Ambassadors</FooterLink>
              </Link>
              <Link href="/">
                <FooterLink>Agency</FooterLink>
              </Link>
              <Link href="/">
                <FooterLink>Influencer</FooterLink>
              </Link>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <Link href="/">
                <FooterLink>Contact</FooterLink>
              </Link>
              <Link href="/">
                <FooterLink>Support</FooterLink>
              </Link>
              <Link href="/">
                <FooterLink>Designations</FooterLink>
              </Link>
              <Link href="/">
                <FooterLink>Sponsorships</FooterLink>
              </Link>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <Link href="/">
                <FooterLink>Instagram</FooterLink>
              </Link>
              <Link href="/">
                <FooterLink>Facebook</FooterLink>
              </Link>
              <Link href="/">
                <FooterLink>Youtube</FooterLink>
              </Link>
              <Link href="/">
                <FooterLink>Twitter</FooterLink>
              </Link>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo>dolla</SocialLogo>
            <WebsiteRights>
              dolla &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
