import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero className="hero" backgroundImage="https://www.educative.io/api/page/4633464658722816/image/download/5756614444318720">
      <img className="photo"
        src="/assetsREADME/portfoliodef.jpg"
        width="200px" alt="Heribert Villazana. Taken at New York in 2019">
          </img>
        <h1>Heribert Villazana</h1>
        <h2>Full Stack Web Developer</h2>
        <a class="social-link" href="https://www.linkedin.com/in/herivillaz/" target="_blank"><i
            class="fab fa-linkedin-in fa-4x"></i></a>
            <span class="last_span"></span>
            <a class="social-link" href="https://github.com/herivillaz" target="_blank"><i class="fab fa-github fa-4x">
          </i></a>
        <span class="last_span"></span>
        <a class="social-link" href="https://instagram.com/herivillaz" target="_blank"><i
            class="fab fa-instagram fa-4x"></i></a>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p class="texthome bg-light text-dark">
            Heribert Villazana was born in Puerto Cabello, Venezuela on June 28, 1993. <br />
        He received a degree in law from the Universidad Jose Antonio Paez, and later in teaching component.
        He became passionate about Criminal Law, working as a Criminal Trial Lawyer/Attorney during the first years of
        his career. <br />
        In 2016, a socioeconomic and political crisis that began in Venezuela during the presidency of Hugo Chávez has
        continued into the presidency of Nicolás Maduro. It is marked by hyperinflation, escalating starvation, disease,
        crime and mortality rates, resulting in massive emigration from the country. <br />
        As a resulting, Heribert moved to Quito, Ecuador, where He got involved in the program of Consejo de la
        Judicatura Professional practices of Law (judiciary Council), becoming Attorney in Ecuador also.
        He worked as a transit Lawyer in Guayaquil, Ecuador, becoming successful in the different courts, clients, and
        professional offices. <br />
        In 2018, the Law practitioner realized that He was not comfortable in the country, He was disgusted about the
        corruption in the court, and disapointed about the money that the law firm was paying him, so He felt the needed
        of a break. <br />
        He decided to move to New York and start a new life, called "American Dream" for some people.
        "I still have a long list of places I want to explore, get to know, fall in love with, and I plan to do that.
        But New York stole my heart, and for that, I am grateful". He states.
        Koala -how some friends call him- has been working hard in the city as a server/waiter, bartender in the
        Hospitality, food  beverages Industry. <br />
        Currently, He is a student of the Coding Boot Camp program of Columbia University, working with dedication,
        passion, becoming passionate about been a Web Developer, Full stack developer and UX design.
        </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
