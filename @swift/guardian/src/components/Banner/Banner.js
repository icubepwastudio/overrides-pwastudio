import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LoadingSpiner from '@magento/venia-ui/lib/components/LoadingIndicator';

import { useBanner } from '@talons/Home/useBanner';
import BannerItem from '@components/Home/Banner/BannerItem';

const Banner = () => {
    const { bannerData, bannerLoading } = useBanner();
    const [isPhone, setIsPhone] = useState(window.innerWidth < 1024);
    const data = bannerData.slider.images;
    const banner = [];

    const resizePhone = () => {
        window.onresize = function() {
            const width = window.innerWidth;
            const newIsPhone = width < 1024;
            if (isPhone !== newIsPhone) {
                setIsPhone(newIsPhone);
            }
        };
    };

    useEffect(() => {
        resizePhone();
    }, [isPhone]);

    const slideSettings = {
        autoPlay: true,
        showArrows: isPhone ? false : true,
        showThumbs: false,
        showIndicators: true,
        showStatus: false,
        infiniteLoop: true,
        lazyLoad: true,
        dynamicHeight: true,
        transitionTime: 500
    };

    data.map((item, index) => {
        if (item.image_id) {
            banner.push(
                <div key={index} style={{ cursor: 'pointer' }}>
                    <BannerItem item={item} isPhone={isPhone} />
                </div>
            );
        }
    });

    if (!bannerData && bannerLoading) {
        return <LoadingSpiner />;
    }

    return (
        <div>
            <div className={`container home-container`}>
                <Carousel {...slideSettings}>{banner}</Carousel>
                {/* overrides */}
                <h1>Hello World, Test Override</h1>
            </div>
        </div>
    );
};

export default Banner;
