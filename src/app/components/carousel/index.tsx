import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import photo1 from '../../gallery/photo1.jpg'
import photo4 from '../../gallery/photo3.jpg'
import photo7 from '../../gallery/photo7.jpg'
import photo9 from '../../gallery/photo9.jpg'
import photo10 from '../../gallery/photo10.jpg'
import photo13 from '../../gallery/photo13.jpg'


import { EffectCoverflow, Pagination, Navigation, Autoplay, A11y } from 'swiper'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'

export default function Carousel() {
  const images = {
    img1: photo1,
    img2: photo4,
    img3: photo7,
    img4: photo9,
    img5: photo10,
    img6: photo13,
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
        <img className="rounded-xl shadow-md shadow-gray-500 w-[50vw]" src={images.img1.src} width="80%" alt="book"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-xl shadow-md shadow-gray-500 w-[50vw]" src={images.img2.src} width="80%" alt="book"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-xl shadow-md shadow-gray-500 w-[50vw]" src={images.img3.src} width="80%" alt="book"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-xl shadow-md shadow-gray-500 w-[50vw]" src={images.img4.src} width="80%" alt="book"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-xl shadow-md shadow-gray-500 w-[50vw]" src={images.img5.src} width="80%" alt="book"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-xl shadow-md shadow-gray-500 w-[50vw]" src={images.img6.src} width="80%" alt="book"></img>
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  )
}
