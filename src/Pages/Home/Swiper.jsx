
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import swiper1 from '../../assets/Swiper/Swiper 1.jpg'
import swiper2 from '../../assets/Swiper/Swiper 2.jpg'
import swiper3 from '../../assets/Swiper/Swiper 3.jpg'
const BannerSwiper = () => {
    return (
        <div className=' '>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src={swiper1} className=' ' alt="" /></SwiperSlide>
                <SwiperSlide><img src={swiper2} className=' ' alt="" /></SwiperSlide>
                <SwiperSlide><img src={swiper3} className=' ' alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSwiper;