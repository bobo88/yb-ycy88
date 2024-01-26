import React from "react";
import { Carousel } from 'antd';
import vue_element from '@/assets/image/vue_element.png'
import react from '@/assets/image/react.png'
import nginx from '@/assets/image/nginx.png'
import echarts from '@/assets/image/echarts.png'

const Banner = () => {
  return (
    <Carousel  autoplay className="banner-box">
      <div className="item">
        <img src={vue_element} alt="Vue + Element" />
        <p className="desc">VUE / ELEMENT</p>
      </div>
      <div className="item">
        <img src={react} alt="React" />
        <p className="desc">REACT / ANTD</p>
      </div>
      <div className="item">
        <img src={nginx} alt="Nginx" />
        <p className="desc">NGINX</p>
      </div>
      <div className="item">
        <img src={echarts} alt="Echarts" />
        <p className="desc">ECHARTS</p>
      </div>
    </Carousel>
  )
};
export default Banner;
