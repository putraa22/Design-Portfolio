import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import ColorSharp2 from "../Asset/img/color-sharp2.png";
import projImg1 from "../Asset/img/project1.png";
import projImg2 from "../Asset/img/project2.png";
import projImg3 from "../Asset/img/project3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Projects() {
  const projects = [
    {
      title: "Businiss Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Businiss Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Businiss Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Businiss Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Businiss Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Businiss Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A iusto hic adipisci quis ipsa tempora commodi incidunt sapiente corporis. Nihil similique ab reiciendis repellat esse dolore iure eaque fugit ipsam!</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={ColorSharp2} alt="bgImage" />
    </section>
  );
}

export default Projects;
