import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
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
import python from "../assets/python.png";
import firebase from "../assets/firebase.png";
import tsc from "../assets/tsc.png";
import angular from "../assets/angular.png";
import { useTranslation } from "react-i18next";

export const HabilidadesTecnicas = () => {

  const { t } = useTranslation();

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
    { src: python, alt: "python" },
    { src: firebase, alt: "firebase" },
    { src: tsc, alt: "tsc" },
    { src: git, alt: "git" },
    { src: angular, alt: "angular" },
  ];

  return (
    <>
      <div className="contenedor-ht">
        <hr id="separador" />
        <h1 id="titulo-ht">{t("tecnologias-seccion.tecnologias-titulo")}</h1>

        <div className="container">
          <Swiper
            spaceBetween={20}
            autoplay={{
              delay: 750,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            freeMode={true}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 3,
              },
              440: {
                slidesPerView: 4,
              },
              770: {
                slidesPerView: 5,
              },
              990: {
                slidesPerView: 7,
              },
              1200: {
                slidesPerView: 9,
              },
            }}
            className="mySwiper"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="card skill-card">
                  <div className="card-img">
                    <img
                      className="img-fluid"
                      src={skill.src}
                      alt={skill.alt}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
