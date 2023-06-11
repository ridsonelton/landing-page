import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation, Autoplay, A11y } from 'swiper'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'

export default function Carousel() {
  const images = {
    img1: 'https://drive.google.com/uc?id=1YnL8Xwm7M4fVAh8jch9s2W3DDGd3YM6o',
    img2: 'https://drive.google.com/uc?id=1kOhgpBNWz_Rc9ZHpcCPZMzHrWJ72a-MA',
    img3: 'https://drive.google.com/uc?id=1hUv4q0l1_PFVCCROet8qLTzm_tie_nsw',
    img4: 'https://drive.google.com/uc?id=16o6lyjkFXcUUYgM0NPIhfqZQ_N4IENkL',
    img5: 'https://drive.google.com/uc?id=1iRSDkjkfTtrqMo9oTjVmAIWD6N3ZsX_a',
    img6: 'https://drive.google.com/uc?id=1k9ant16KYnr9hbSloaPJ8eb8oBYHqIJ9',
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
