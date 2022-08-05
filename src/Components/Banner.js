import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../Asset/icon/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center ">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                  <span className="tagline">Wellcome to my Portfolio</span>
                  <h1>
                    {`Hi i'm Hermansyah Putra `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quia vitae odit enim nesciunt dolorum fuga, totam expedita libero error magnam aut earum et. Dolore cum iste harum reprehenderit quia?</p>
                  <button onClick={() => console.log("Connect")}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg} width={700} height={600} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
