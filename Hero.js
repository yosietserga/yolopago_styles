import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Img from "./ui/image";

const Hero = () => {
  return (
    <section className="section position-relative hero-section">
      <Container>
        <span className="circle circle1">&nbsp;</span>
        <span className="hero-bg">&nbsp;</span>
        <Row className="align-items-center">
          <Col lg={8}>
            <div className="pr-lg-5">
              <p className="font-monserrat text-primary font-weight-medium f-14 mb-4 text1">
                Mandar Dinero,<br>
                es tan fácil
                <br />
                como enviar un mensaje
              </p>
              <span className="text-primary font-weight-medium text3 bajada-hero">
                Descarga y disfruta Yolo Pago
              </span>
              <br />
              <a href="#">
                <Img s="PlayStore.svg" />
              </a>
              <a href="#">
                <Img s="Apple.svg" />
              </a>
              <a href="#">
                <Img s="Huawei.svg" />
              </a>
            </div>
          </Col>
          <Col lg={4}>
            <div className="mt-5 mt-lg-0">
              <Img s="phones.png" c="img-fluid mx-auto d-block phones" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;