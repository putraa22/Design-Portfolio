import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ThumbSkill from "../Asset/img/meter1.svg";
import ThumbSkill2 from "../Asset/img/meter2.svg";
import ThumbSkill3 from "../Asset/img/meter3.svg";
import ThumbSkill4 from "../Asset/img/meter1.svg";
import ColorSharp from "../Asset/img/colorsharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeInTopRight" : ""}>
                    <h2>Skills</h2>
                  </div>
                )}
              </TrackVisibility>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quia et velit dicta. Sint velit eveniet illum veniam rem. Sit, omnis quos iste vero totam blanditiis dignissimos dolorem perspiciatis ea.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={ThumbSkill} alt="Thumbnail" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={ThumbSkill2} alt="Image2" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={ThumbSkill3} alt="Image3" />
                  <h5>Data Science</h5>
                </div>
                <div className="item">
                  <img src={ThumbSkill4} alt="Image4" />
                  <h5>UI/UX Design</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={ColorSharp} alt="BackgroundImage" />
    </section>
  );
}

export default Skills;
