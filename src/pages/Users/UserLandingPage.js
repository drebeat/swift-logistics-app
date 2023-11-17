import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  BsLinkedin,
  BsYoutube,
  BsInstagram,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";

import delivery1 from "../../assets/african-american-female-courier-driving-delivery-van-city.jpg";
import delivery2 from "../../assets/full-shot-women-sitting-together.jpg";
import delivery3 from "../../assets/medium-shot-sporty-woman-outdoors.jpg";
import Happywoman from "../../assets/17025.jpg";

import { Link, useNavigate } from "react-router-dom";
import LandingNav from "../../components/Users/LandingNav";

const UserLandingPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="overflow-hidden min-h-screen"
      style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
    >
      <LandingNav />
      <div className="container mx-auto">
        <div className="carousel-wrapper pt-8">
          <Carousel
            infiniteLoop
            useKeyboardArrows
            showArrows
            autoPlay
            centerMode
            showStatus={false}
            showThumbs={false}
            // centerSlidePercentage={20}
          >
            <div>
              <img
                src={require("../../assets/shoppingx.jpg")}
                className="rounded-xl"
              />
              <p className="legend">Shopping Spree</p>
            </div>
            <div>
              <img
                src={require("../../assets/bicycle.jpg")}
                className="rounded-xl"
              />
              <p className="legend">Express Delivery</p>
            </div>
            <div>
              <img
                src={require("../../assets/delivery-woman.avif")}
                className="rounded-xl"
              />
              <p className="legend">Personalized Services</p>
            </div>
          </Carousel>
        </div>
        <div className="contianer flex justify-between md:flex-row flex-col py-10 mx-8">
          <div className="w-full md:w-1/2">
            <h1 className="font-bold">We Are The Best</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur tempora sit, ea dolor ipsam atque dolorem praesentium!
              Praesentium excepturi cumque iure sed commodi quisquam, aperiam
              magni quasi quod, non vitae.
            </p>
          </div>
          <div class="mt-6">
            <div class="text-center text-white bg-fuchsia-950 text-2xl px-6 py-3 md:px-8 md:py-4 font-medium">
              Join us today
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purpleBg w-screen">
        <div className="container mx-auto flex md:justify-between items-center justify-center py-10 px-4">
          <div className="w-full md:w-1/2">
            <h1 className="font-bold text-white text-2xl md:text-3xl pb-4">
              Youth Empowerment
            </h1>
            <p className="w-full text-slate-400 text-xl">
              Join Us on Our mission to empower the youth and build a brighter,
              more prosperous future for young people
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-4 w-full py-10">
          <div className="mx-4">
            <div className="">
              <img
                src={delivery1}
                alt=""
                srcSet=""
                className="h-[200px] md:w-[270px] md:h-[225px] xl:w-[300px] object-cover"
              />
            </div>
            <h1 className="font-bold text-white py-4 break-words">
              Quick Dispatch,{" "}
              <span className="text-limeBg">Effortless Tracking</span> With Us!
            </h1>
            <p className="text-slate-400">
              Get ready to experience effortless nationwide delivery with swift
              dispatch and a hassle-free tracking system
            </p>
          </div>
          <div className="mx-4">
            <div className="">
              <img
                src={delivery2}
                alt=""
                srcSet=""
                className="h-[200px] md:w-[270px] md:h-[225px] xl:w-[300px] object-cover"
              />
            </div>
            <h1 className="font-bold text-white py-4">
              Quick Dispatch,{" "}
              <span className="text-limeBg">Effortless Tracking</span> With Us!
            </h1>
            <p className="text-slate-400">
              Get ready to experience effortless nationwide delivery with swift
              dispatch and a hassle-free tracking system
            </p>
          </div>
          <div className="mx-4">
            <div className="">
              <img
                src={delivery3}
                alt=""
                srcSet=""
                className="h-[200px] md:w-[270px] md:h-[225px] xl:w-[300px] object-cover"
              />
            </div>
            <h1 className="font-bold text-white py-4">
              Quick Dispatch,{" "}
              <span className="text-limeBg">Effortless Tracking</span> With Us!
            </h1>
            <p className="text-slate-400">
              Get ready to experience effortless nationwide delivery with swift
              dispatch and a hassle-free tracking system
            </p>
          </div>
        </div>
      </div>
      <div className="bg-limeBg w-screen py-10">
        <div className="container mx-auto flex md:justify-between items-center justify-center py-10">
          <div className="w-full md:w-1/2">
            <h1 className="text-center md:text-left text-2xl md:text-5xl font-black tracking-wide pb-4">
              Swift App Puts You First
            </h1>
          </div>
          <div className=""></div>
        </div>

        <div class="container mx-auto w-screen flex items-center md:flex-row flex-col space-x-12">
          <div className="mx-4 md:mx-0">
            <img
              src={Happywoman}
              alt=""
              srcset=""
              className="w-[480px] md:w-[489px] md:h-[318px] object-cover"
            />
          </div>
          <div className="w-full">
            <h1 className="text-black text-[32px] py-3 font-medium  ">
              Try it out now
            </h1>
            <div className="flex justify-center items-center space-x-3">
              <div className="flex items-center justify-center w-32 h-24 md:w-24 md:h-24 bg-purpleBg">
                <span className="text-white text-3xl">""</span>
              </div>
              <div className="break-normal text-sm md:text-lg pr-3 md:px-0">
                Join Us on Our mission to empower the youth and build a
                brighter, more prosperous future for young people
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen py-20 px-20 flex flex-col md:justify-between md:flex-row items-center">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-4 w-full py-10">
          <div className="">
            <span className="text-limeBg font-bold text-2xl capitalize">
              Get Started
            </span>
            <Link to="">
              <p className="font-semibold underline">Partner With Us</p>
            </Link>
            <Link to="">
              <p className="font-semibold underline">Actualizing SDG</p>
            </Link>
          </div>
          <div className="py-3 sm:py-0">
            <span className="text-limeBg font-bold text-2xl capitalize">
              About Us
            </span>
            <Link to="">
              <p className="font-semibold underline">Meet The Team</p>
            </Link>
            <Link to="">
              <p className="font-semibold underline">Private Policy</p>
            </Link>
            <Link to="">
              <p className="font-semibold underline">Terms And Condition</p>
            </Link>
          </div>
          <div>
            <span className="text-limeBg font-bold text-2xl capitalize">
              Community
            </span>
            <Link to="">
              <p className="font-semibold underline">Upcoming Event</p>
            </Link>
            <Link to="">
              <p className="font-semibold underline">
                Join Our Virtual Community
              </p>
            </Link>
          </div>
        </div>
        <div>
          <div className="text-limeBg font-bold text-xl capitalize p-4">
            Social Media
          </div>
          <div className="flex gap-4">
            <BsLinkedin />
            <BsYoutube />
            <BsInstagram />
            <BsFacebook />
            <BsTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLandingPage;
