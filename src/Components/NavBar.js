import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoHome from "../Asset/img/logo-2.svg";
import NavIcon1 from "../Asset/icon/facebook.svg";
import NavIcon2 from "../Asset/icon/github.svg";
import NavIcon3 from "../Asset/icon/instagram.svg";

function NavBar() {
  const { activeLink, setActiveLink } = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={LogoHome} width={90} height={70} alt="LOGO" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="  ms-auto ">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>
              Home
            </Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skill" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skill")}>
              Skill
            </Nav.Link>
            <Nav.Link href="#project" className={activeLink === "project" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("project")}>
              Project
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={NavIcon1} alt="facebook" />
              </a>
              <a href="#">
                <img src={NavIcon2} alt="github" />
              </a>
              <a href="#">
                <img src={NavIcon3} alt="instagram" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("Connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
