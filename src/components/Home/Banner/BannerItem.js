import React from 'react';

const BannerItem = props => {
    const { item, isPhone } = props;
    const w = '100%';
    const h = '100%';
    let img = '';

    if (isPhone) {
        img = item.mobile_image_url;
    } else {
        img = item.image_url;
    }

    if (!img) return null;

    return (
        <div
            style={{ position: 'relative', maxWidth: w, minHeight: h }}
            className="banner-item"
        >
            <img className="img-responsive" width={w} height={h} src={img} />
        </div>
    );
};

export default BannerItem;
