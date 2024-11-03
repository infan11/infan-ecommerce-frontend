import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
const BookBanner = () => {
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
    backgroundImage: "url(https://i.ibb.co.com/bb0QynH/books1.jpg)",
  }}>
  <div className=""></div>
  <div className="hero-content  text-center">
  <p className='text-white text-5xl '>BOOKS COLLECTION</p>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div
  className="hero h-[245px] md:h-[650px] "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/kKqc1vd/book-library-with-open-textbook-1.jpg)",
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
    backgroundImage: "url(https://i.ibb.co.com/PC0TwCP/book.png)",
  }}>
  <div className=""></div>
  <div className="hero-content  text-center">
 
  </div>
</div>
        </SwiperSlide>
        
      
      </Swiper>
        </div>
        </div>
    );
};

export default BookBanner;