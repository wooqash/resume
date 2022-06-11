// core version + navigation, pagination modules:
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Children, isValidElement, ReactElement } from "react";

type SwiperCarouselProps = {
  children: Array<ReactElement>;
  nav?: boolean;
  pagination?: boolean;
  loop?: boolean;
  autoplay?: boolean;
};

const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
  children,
  nav = true,
  pagination = true,
  loop = true,
  autoplay = false,
}) => {
  const newChildren = Children.toArray(children).map((child) => {
    if (isValidElement(child)) {
      return <SwiperSlide key={child.key}>{child}</SwiperSlide>;
    }
  });
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      loop={loop}
      navigation={nav}
      pagination={pagination && { clickable: true }}
      autoplay={autoplay && { delay: 5000 }}
    >
      {newChildren}
    </Swiper>
  );
};

export default SwiperCarousel;
