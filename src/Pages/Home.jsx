import React from "react";
import { SlideUpAnimation } from "../Utils/Animation";
import {Testimonials} from '../Components/index'

const Home = () => {


  return (
    <SlideUpAnimation className="py-2">
      <div className="carousel w-full px-5 rounded-2xl">
        {/* <Testimonials /> */}
        THIS IS MY HOMEPAGE 
      </div>
    </SlideUpAnimation>
  );
};

export default Home;
