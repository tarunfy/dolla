import Link from "next/link";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="discover"
            onClick={toggle}
            smooth
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Discover
          </SidebarLink>
          <SidebarLink
            to="services"
            onClick={toggle}
            smooth
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Services
          </SidebarLink>

          <SidebarLink
            to="signup"
            onClick={toggle}
            smooth
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <Link href="/signin" passHref>
            <SidebarRoute>Sign In</SidebarRoute>
          </Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
