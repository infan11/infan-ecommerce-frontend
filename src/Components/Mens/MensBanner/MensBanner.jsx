import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
const MensBanner = () => {
    return (
        <div>
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
    backgroundImage: "url(https://i.ibb.co.com/hHD6XkM/White-Hand-Drawn-simple-Coming-Soon-Instagram-Post-1.png)",
  }}>
  <div className=""></div>
  <div className="  text-center">
   <p className='text-2xl md:text-5xl font-bold text-white'>COMMING</p>
   <br />
   <p className='text-white text-xl md:text-2xl  italic'>soon</p>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div
  className="hero h-[245px] md:h-[650px] "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/fYyDWPD/JENS.jpg)",
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
    backgroundImage: "url(https://i.ibb.co.com/KDBh25Z/image5.jpg)",
  }}>
  <div className=""></div>
  <div className="hero-content  text-center">
   <p className='font-bold text-2xl text-orange-400  md:text-4xl'>New Arrival </p>
  </div>
</div>
        </SwiperSlide>
      
      </Swiper>
        </div>
        </div>
    );
};

export default MensBanner;