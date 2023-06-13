import Logo from "../ui/logo/Logo";
import NavList from "../ui/navList/NavList";
import NavGroup from "../ui/navGroup/NavGroup";
import Container from "../ui/container/Container";
import Wrapper from "../ui/wrapper/Wrapper";
import StyledNavbar from "./Navbar.styled";
import NavDropdown from "../ui/navDropdown/NavDropdown";
import NavBackground from "../ui/navBackground/NavBackground";

import LogoDPM from "../../assets/logo.png";

import { Link } from "react-scroll";

import { MdSpaceDashboard } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

import { useState } from "react";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

function Navbar({ isLoginPage }) {
  const [nav, setNav] = useState(false);

  const { logout } = useLogout();

  const handleClick = () => {
    setNav(!nav);
  };

  const { user } = useAuthContext();

  return (
    <NavBackground>
      <Wrapper>
        <StyledNavbar>
          <Container>
            <Logo src={LogoDPM} width="70em" />
          </Container>
          <Container>
            <NavGroup>
              {!isLoginPage ? (
                <>
                  <NavList>
                    <Link to="tupoksi" smooth={true} duration={500}>
                      Tupoksi
                    </Link>
                  </NavList>
                  <NavList>
                    <Link to="produkHukum" smooth={true} duration={500}>
                      Produk Hukum
                    </Link>
                  </NavList>
                  <NavList>
                    <Link to="aspirasi" smooth={true} duration={500}>
                      Aspirasi
                    </Link>
                  </NavList>
                </>
              ) : (
                <>
                  <NavList>
                    <a href="/">Beranda</a>
                  </NavList>
                  {user && (
                    <NavList>
                      <a onClick={() => logout()}>Logout</a>
                    </NavList>
                  )}
                </>
              )}
              {!isLoginPage && (
                <NavList>
                  <Link onClick={() => handleClick()}>
                    <span>
                      <MdSpaceDashboard />
                    </span>
                  </Link>
                  {nav && (
                    <NavDropdown>
                      <NavGroup>
                        <li>
                          <a
                            href="https://www.instagram.com/dpmsttnf/"
                            target="_blank"
                            className="instagram"
                          >
                            <BsInstagram />
                            dpmsttnf
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a href="dashboard">Dashboard</a>
                        </li>
                      </NavGroup>
                    </NavDropdown>
                  )}
                </NavList>
              )}
            </NavGroup>
          </Container>
        </StyledNavbar>
      </Wrapper>
    </NavBackground>
  );
}

export default Navbar;
