import React from "react";
export default function Social() {
  return (
    <section id="social">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Get In Touch With Me
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Connect with me on social media or github
          </p>
        </div>
        <div className="flex flex-wrap lg:w-1/2 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center text-center hover:bg-green-600">
                <div className="title-font font-medium text-white ">
                  <a className="justify-center" href="https://www.linkedin.com/in/mathew-morton-519a09258/">Connect With Me On LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:bg-green-600">
                <div className="title-font font-medium text-white ">
                  <a href="https://www.instagram.com/matt_0023/">Connect With Me On Instagram</a>
                </div>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:bg-green-600">
                <div className="title-font font-medium text-white ">
                  <a href="https://github.com/Matt0035">Connect With Me On Github</a>
                </div>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:bg-green-600">
                <div className="title-font font-medium text-white ">
                  <a href="https://twitter.com/Matthew_3325">Connect With Me On Twitter</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
