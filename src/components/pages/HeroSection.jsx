// import React from 'react'
import Image from '../../assets/Image.png';
const HeroSection = () => {
  return (
    <div className="bg-[#F8F8F8] h-screen py-20 px-20 lg:px-30">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 mb-8 lg:mb-0 ">
          <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold text-gray-800 leading-tight">
            Learn a New Skill <br />
            Everyday, Anytime, <br />
            and Anywhere.
          </h1>
          <p className="text-gray-600 mt-4">
            <span className="font-bold">1000+</span> Courses covering all tech
            domains for you to learn and explore new opportunities. Learn from
            Industry Experts and land your Dream Job.
          </p>
          <div className="flex space-x-4 mt-8">
            <button className="bg-blue-600 text-white rounded-full px-6 py-3 transition-transform transform hover:scale-105">
              Start Trial
            </button>
            <button className="border border-blue-600 text-blue-600 rounded-full px-6 py-3 transition-transform transform hover:scale-105">
              How it Works
            </button>
          </div>
          <div className="flex space-x-8 mt-10">
            <div className="text-center">
              <span className="text-yellow-500 text-3xl font-bold">1000+</span>
              <p className="text-gray-700 mt-2">Courses to choose from</p>
            </div>
            <div className="text-center">
              <span className="text-blue-500 text-3xl font-bold">5000+</span>
              <p className="text-gray-700 mt-2">Students Trained</p>
            </div>
            <div className="text-center">
              <span className="text-red-500 text-3xl font-bold">200+</span>
              <p className="text-gray-700 mt-2">Professional Trainers</p>
            </div>
          </div>
        </div>
        <div className="relative lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Image}
            alt="Student with Laptop"
            className="relative z-10 w-full max-w-[50rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
