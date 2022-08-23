import { Col, Container, Row } from "react-bootstrap";
import MailChimpForm from "./MailChimpForm";
import Logo from "../Asset/icon/logo.svg";
import imageIcon1 from "../Asset/icon/nav-icon1.svg";
import imageIcon2 from "../Asset/icon/nav-icon2.svg";
import imageIcon3 from "../Asset/icon/nav-icon3.svg";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={Logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">
                <img src={imageIcon1} alt="icon1" />
              </a>
              <a href="">
                <img src={imageIcon2} alt="icon2" />
              </a>
              <a href="">
                <img src={imageIcon3} alt="icon3" />
              </a>
            </div>
            <p>CopyRight 2022. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
