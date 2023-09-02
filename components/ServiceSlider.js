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
    title: "AI In The Workplace",
    devlogo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "August 28th, 2023",
    image: "/blog1.png",
  },
  {
    icon: <FaBlog />,
    title: "Painting By Letters",
    devlogo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "July 21st, 2023",
    image: "/blog2.png",
  },
  {
    icon: <FaBlog />,
    title: "Powerful Prompting",
    devlogo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "July 3rd, 2023",
    image: "/blog3.png",
  },
  {
    icon: <FaBlog />,
    title: "CLI in Style",
    devIcon: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "June 9th, 2023",
    image: "/blog4.png",
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
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[340px] sm:h-[440px]"
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
                      <Image
                        src={"/dev.png"}
                        width={50}
                        height={150}
                        alt=""
                      />
                      <div className="delay-100">{item.date}</div>
                    </div>
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
