import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="mb-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{delay:2000}}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/0M069jM/cloth-products.jpg"
            className="w-full lg:h-[420px] md:h-72 h-60"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://i.ibb.co.com/mCPwYQJ/electronics.jpg"
            className="w-full object-cover lg:h-[420px] md:h-72 h-60"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/HXZfHhV/grocery.jpg"
            className="w-full lg:h-[420px] md:h-72 h-60"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://i.ibb.co.com/5vK7vnz/gym-accessories.jpg"
            className="w-full object-cover lg:h-[420px] md:h-72 h-60"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
