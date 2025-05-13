import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import photo1 from '../../gallery/photo1.jpg'

import { EffectCoverflow, Pagination, Navigation, Autoplay, A11y } from 'swiper'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'

export default function Carousel() {
  const images = {
    img1: '../../gallery/photo1.jpg',
    img2: '../../gallery/photo1.jpg',
    img3: '../../gallery/photo1.jpg',
    img4: '../../gallery/photo1.jpg',
    img5: '../../gallery/photo1.jpg',
    img6: '../../gallery/photo1.jpg',
  }
  return (
    <Swiper
      effect={'coverflow'}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={true}
      spaceBetween={5}
      modules={[EffectCoverflow, Pagination, Navigation, A11y, Autoplay]}
      className="swiper-container"
    >
      <SwiperSlide>
        <img className="rounded-xl shadow-md shadow-gray-500 w-[50vw]" src={images.img1} width="80%" alt="book"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-xl shadow-md shadow-gray-500 w-[50vw]" src={images.img2} width="80%" alt="book"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-xl shadow-md shadow-gray-500 w-[50vw]" src={images.img3} width="80%" alt="book"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-xl shadow-md shadow-gray-500 w-[50vw]" src={images.img4} width="80%" alt="book"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-xl shadow-md shadow-gray-500 w-[50vw]" src={images.img5} width="80%" alt="book"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-xl shadow-md shadow-gray-500 w-[50vw]" src={images.img6} width="80%" alt="book"></img>
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  )
}
