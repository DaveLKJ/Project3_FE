import { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.css";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [ 
        "https://c1.wallpaperflare.com/preview/557/865/216/blouse-clothing-dress-fashion.jpg",
        "https://c0.wallpaperflare.com/preview/14/852/43/black-and-white-boutique-clothes-clothing-rack.jpg",
        "https://c4.wallpaperflare.com/wallpaper/817/318/520/women-model-monochrome-fashion-photography-wallpaper-preview.jpg"
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
      };
      const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
      };

    return (

        <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};
export default Slider
