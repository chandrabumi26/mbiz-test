import React from "react";
import "@/styles/__landing.scss";

const Banner = () => {
  const images = {
    firstBanner:
      "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F600x600%2F2024%2F03%2F07%2F795a93c9ff92398475dadfa73f061852.jpg&w=1920&q=75",
    secondBanner:
      "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F600x600%2F2021%2F05%2F24%2Fcf9b9bc83b4a3f3baede38a04ed2b656.jpg&w=1920&q=75",
    thirdBanner:
      "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F600x600%2F2021%2F05%2F24%2F4525b370531c0d124e39b404baae2c9d.jpg&w=1920&q=75",
  };

  const adsImages = {
    firstImg:
      "https://img.mbizmarket.co.id/marketing_images/thumbs/500x290/2021/05/24/af41f7f79ccaaafc773a0d2db62aed1f.jpg",
    secondImg:
      "https://img.mbizmarket.co.id/marketing_images/thumbs/500x290/2020/05/06/108c640fe553d7dafc5e45b3c2c34210.jpg",
    thirdImg:
      "https://img.mbizmarket.co.id/marketing_images/thumbs/500x290/2021/05/24/f65f6a2539c6eaf510f9fa121e204b5d.jpg",
  };
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__content-posters">
          <div className="banner__big-img">
            <img src={images.firstBanner} />
          </div>
          <div className="banner__small-img">
            <img src={images.secondBanner} />
            <img src={images.thirdBanner} />
          </div>
        </div>
        <div className="banner__content-ads">
          <span className="banner__content-title">
            Kemudahan Berbelanja di Mbizmarket
          </span>
          <div className="banner__ads-container">
            <img src={adsImages.firstImg} />
            <img src={adsImages.secondImg} />
            <img src={adsImages.thirdImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
