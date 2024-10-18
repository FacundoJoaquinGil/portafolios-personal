import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
// import 'swiper/css/autoplay';

import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import node from "../assets/node.png";
import sql from "../assets/sql.png";
import git from "../assets/git-logo.png";
import mongo from "../assets/mongo.png";
import docker from "../assets/docker.png";
import postman from "../assets/postman.png";
import CSharp from "../assets/CSharp.png";

export const HabilidadesTecnicas = () => {
  const skills = [
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: js, alt: "JavaScript" },
    { src: react, alt: "React" },
    { src: bootstrap, alt: "Bootstrap" },
    { src: node, alt: "Node.js" },
    { src: sql, alt: "SQL" },
    { src: CSharp, alt: "C#" },
    { src: mongo, alt: "MongoDB" },
    { src: docker, alt: "Docker" },
    { src: postman, alt: "Postman" },
    { src: git, alt: "Git" },
  ];

  return (
    <div className="contenedor-ht">
      <hr id="separador" />
      <h1 id="titulo-ht">Habilidades Técnicas</h1>

      <div className="container">
        <Swiper
          spaceBetween={20}
          autoplay={{
            delay: 750,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          freeMode={true}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 3, // Para pantallas pequeñas
            },
            440: {
              slidesPerView: 4, // Para pantallas medianas
            },
            770: {
              slidesPerView: 5, // Para pantallas grandes
            },
            990: {
              slidesPerView: 7, // Para pantallas muy grandes
            },
            1200: {
              slidesPerView: 9, // Para pantallas ultra grandes
            },
          }}
          className="mySwiper"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="card skill-card">
                <div className="card-img">
                  <img className="img-fluid" src={skill.src} alt={skill.alt} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
