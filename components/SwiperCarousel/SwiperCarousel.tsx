// core version + navigation, pagination modules:
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Children, isValidElement, ReactElement } from "react";

type SwiperCarouselProps = {
  children: Array<ReactElement>;
};

const SwiperCarousel: React.FC<SwiperCarouselProps> = ({ children }) => {
  const newChildren = Children.toArray(children).map((child) => {
    if (isValidElement(child)) {
      return <SwiperSlide key={child.key}>{child}</SwiperSlide>;
    }
  });
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      {newChildren}
    </Swiper>
  );
};

export default SwiperCarousel;
