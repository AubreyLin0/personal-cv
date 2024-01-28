import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "./SectionHeading";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import SlideContent from "../elements/SlideContent";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const BREAKPOINTS = {
  // when window width is >= 320px
  320: {
    width: 320,
    slidesPerView: 1,
    slidesPerGroup: 1,
  },
  // when window width is >= 992px
  992: {
    width: 768,
    slidesPerView: 2,
  },
} as const;

const Portfolio = () => {
  return (
    <div className="py-10 flex flex-col items-center gap-5">
      <SectionHeading
        heading="Portfolio"
        position="left-[calc(20%+5px)] bottom-[calc(-20%+5px)]"
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        pagination={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          navigationDisabledClass: "swiper-navigation-disabled",
        }}
        modules={[Pagination, Navigation]}
        breakpoints={BREAKPOINTS}
        className="w-[80vw] mt-10 relative"
      >
        <SwiperSlide>
          <SlideContent
            endpoint="weather-app"
            imgPath="weather-app.png"
            text="Weather App"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            endpoint="IP-tracker"
            imgPath="IP-tracker.png"
            text="IP Tracker"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent endpoint="keeper" imgPath="keeper.png" text="Keeper" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            endpoint="dicee-game"
            imgPath="dicee.png"
            text="Dicee Game"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            endpoint="simon-game"
            imgPath="simon.png"
            text="Simon Game"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            endpoint="digital-clock"
            imgPath="digital-clock.png"
            text="Digital Clock"
          />
        </SwiperSlide>
        <button className="swiper-button-next swiper-navigation-disabled absolute right-[1%] bottom-[50%] z-10 px-3 py-1 rounded-full bg-[#a3a7a87f] hover:bg-[#7c82847f] transition ease-in-out">
          <FontAwesomeIcon icon={faChevronRight} size="2xl" />
        </button>
        <button className="swiper-button-prev swiper-navigation-disabled absolute bottom-[46%] z-10 px-3 py-1 rounded-full bg-[#a3a7a87f] hover:bg-[#7c82847f] transition ease-in-out">
          <FontAwesomeIcon icon={faChevronLeft} size="2xl" />
        </button>
      </Swiper>
    </div>
  );
};

export default Portfolio;
