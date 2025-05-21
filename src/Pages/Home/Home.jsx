import React from 'react';
import BannerSwiper from './Swiper';
import OurTeacher from './OurTeacher';
import KeyFigures from './KeyFigures';
import OurStudent from './OurStudent';
import OurClassRooms from './OurClassRooms';

const Home = () => {
    return (
        <div>
            {/* Banner with a beautiful swiper */}
            <BannerSwiper></BannerSwiper>
            {/* Key Figures */}
            <KeyFigures></KeyFigures>
            {/* Our Student Section */}
            <OurStudent></OurStudent>
            {/* Our Teacher Section */}
            <OurTeacher></OurTeacher>
            {/* Our Class Rooms  Section*/}
            <OurClassRooms></OurClassRooms>
        </div>
    );
};

export default Home;