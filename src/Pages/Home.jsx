import React from "react";
import { SlideUpAnimation } from "../Utils/Animation";
import {Testimonials} from '../Components/index'

const Home = () => {
  // const imageSection = [
  //   {
  //     name: "First image",
  //     url: "/img/Heroimg.jpeg",
  //   },
  //   {
  //     name: "Second image",
  //     url: "/img/Heroimg2.jpeg",
  //   },
  //   {
  //     name: "Third image",
  //     url: "/img/Heroimg3.jpeg",
  //   },
  // ];

  return (
    <SlideUpAnimation className="py-2">
      <div className="carousel w-full px-5 rounded-2xl">
        <Testimonials />
      </div>
    </SlideUpAnimation>
  );
};

export default Home;
