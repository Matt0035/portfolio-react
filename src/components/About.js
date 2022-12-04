import React from "react";
export default function About() {
  return (
    <section id="about">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            About Me
          </h1>
          <p className="mb-5 leading-relaxed justify-center">
          I am a student at NBCC taking an IT Programmer Analyst course. I am 20 years old and grew up in Hampton New Brunswick.
          Some of my favorite hobbies are basketball, longboarding, and computers. I started my coding journey in high school in a 
          intro to java course ever since I've loved learning new things and overcoming obstacles.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
