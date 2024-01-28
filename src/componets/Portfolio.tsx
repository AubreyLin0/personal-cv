import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "./SectionHeading";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SlideContent from "../elements/SlideContent";

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
        navigation
        modules={[Pagination, Navigation]}
        breakpoints={BREAKPOINTS}
        className="w-[80vw] mt-10"
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
      </Swiper>
    </div>
  );
};

export default Portfolio;
