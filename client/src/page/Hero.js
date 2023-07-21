import React from "react";

import { Link } from "react-router-dom";

// react-bootstrap
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// Css
import "./Hero.css";

import chinjung1 from "../img/1281955.jpg";
import chinjung2 from "../img/1281953.jpg";
import chinjung3 from "../img/1281973.jpg";


const Hero = () => {
  return (
    <div className="Hero-main">
      <div class="spc">
        <p class="textspc">
          <span class="letter letter1">S</span>
          <span class="letter letter2">T</span>
          <span class="letter letter3">A</span>
          <span class="letter letter4">T</span>
          <span class="letter letter5">T</span>
          <span class="letter letter6">I</span>
          <span class="letter letter7">S</span>
          <span class="letter letter8">T</span>
          <span class="letter letter9">I</span>
          <span class="letter letter10">C</span>
          <span class="letter letter11">A</span>
          <span class="letter letter12">L</span>
          <span class="letter letter13"> </span>
          <span class="letter letter14">P</span>
          <span class="letter letter15">R</span>
          <span class="letter letter16">O</span>
          <span class="letter letter17">C</span>
          <span class="letter letter18">E</span>
          <span class="letter letter19">S</span>
          <span class="letter letter20">S</span>
          <span class="letter letter21"> </span>
          <span class="letter letter22">C</span>
          <span class="letter letter23">O</span>
          <span class="letter letter24">N</span>
          <span class="letter letter25">T</span>
          <span class="letter letter26">R</span>
          <span class="letter letter27">O</span>
          <span class="letter letter28">L</span>
        </p>
      </div>

      <div className="setupCon">
        <Container>
          <Card style={{ margin: "0px 10%", top: "100px", height: "610px" }}>
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <Image src={chinjung1} />
                <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={chinjung2} />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={chinjung3} />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card>
          {/* <Master /> */}
        </Container>
      </div>
      <div className="button-start">
        <Link to="/home">
          <Button className="btn">Overview !</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
