import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import {
  FaBlog
} from "react-icons/fa"

const serviceData = [
  {
    icon: <FaBlog />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/blog1.png",
  },
  {
    icon: <FaBlog />,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/blog2.png",
  },
  {
    icon: <FaBlog />,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/blog3.png",
  },
  {
    icon: <FaBlog />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/blog4.png",
  },
  {
    icon: <FaBlog />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65, 47, 123, 0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300 ">
              {/* icons */}
              <div className="text-4xl text-accent mb-4 ">{item.icon}</div>
              {/* title & description */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <div className="rounded-lg">
                  <Image
                    className="rounded-lg"
                    src={item.image}
                    width={500}
                    height={250}
                    alt=""
                  />
                  <div className="rounded-lg absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2rem]">
                      {/* title - 1 */}
                      <div className="delay-100">{item.title}</div>
                    </div>
                  </div>
                  <div className="text-3xl">
                    <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                  </div>
                </div>
              </div>
              {/* arrow */}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
