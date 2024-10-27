
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
    return (
        <div>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
     
    
        modules={[Autoplay ]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div
  className="hero h-[245px] md:h-[650px] "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/27mcs5Z/Banner1.png)",
  }}>
  <div className=""></div>
  <div className="hero-content  text-center">
 
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div
  className="hero h-[245px] md:h-[650px] "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/n750yh2/MENS-COLLECTION.png)",
  }}>
  <div className=""></div>
  <div className="hero-content  text-center">
  <p className='text-white text-5xl '>MENS COLLECTION</p>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div
  className="hero h-[245px] md:h-[650px] "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/PC0TwCP/book.png)",
  }}>
  <div className=""></div>
  <div className="hero-content  text-center">
 
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div
  className="hero h-[245px] md:h-[650px] "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/SdjMY7L/Accessories.png)",
  }}>
  <div className=""></div>
  <div className="hero-content  text-center">
 
  </div>
</div>
        </SwiperSlide>
      
      </Swiper>
        </div>
    );
};

export default Slider;