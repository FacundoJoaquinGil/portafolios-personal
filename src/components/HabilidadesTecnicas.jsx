import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import { useTranslation } from "react-i18next";
import { VerTodasTecnologias } from "./VerTodasTecnologias";
import { skills } from "../data/skillsData";

export const HabilidadesTecnicas = () => {

  const { t } = useTranslation();

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
        
        <div className="text-center">
            <VerTodasTecnologias />
        </div>
      </div>
    </>
  );
};
