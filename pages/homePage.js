import React from "react";
import Image from "next/image";

function homePage() {
  return (
    <div className="flex justify-between text-center flex-col md:flex-row  md:mx-20 md:pt-32 pt-28">
      <div className="m-auto md:m-0 w-60 md:w-3/4 h-60 md:h-96 shadow-xl rounded-full relative px-10 md:block">
        <Image
          src={require("../public/images/mars.JPG")}
          alt="heroImage"
          layout="fill"
          objectFit="cover"
          className="rounded-full cursor-pointer  hidden md:block"
        />
      </div>
      <div className="flex flex-col md:ml-20 mx-10 mt-10">
        <h1 className="font-bold text-5xl md:text-7xl md:text-left mb-5">
          Hello I am <span className="text-indigo-900">Marcelito</span>
        </h1>
        <p className="md:text-left font-normal mb-5 flex-wrap">
<<<<<<< HEAD
          A passionate simple person in making web/mobile applications using most useful 
          tech stacks that will be fit to the clients wanted output. 
          Experienced in making website and mobile app using HTML, CSS, JAVASCRIPT,AJAX, PHP, 
          WORDPRESS, REACT, NEXTJS, NODEJS, LARAVEL, TAILWINDCSS and MUI for website development 
          and REACT NATIVE for mobile app development and experienced using MYSQL, MONGODB and FIREBASE.
=======
          "THIS IS UNDER DEVELOPMENT" Adipisicing incididunt magna cupidatat adipisicing proident
          adipisicing tempor. Irure id laboris dolor eu ea. Irure ea nisi
          laboris minim veniam Lorem magna veniam Lorem magna veniam Lorem magna. Adipisicing incididunt magna
          cupidatat adipisicing proident adipisicing tempor Aliqua ad do
          reprehenderit mollit cupidatat ad do reprehenderit. 
>>>>>>> 5059fedcf0d93ae3873add25d1bf301fba901fd1
        </p>
        
        <a
          href="#"
          className="font-semibold mx-auto md:mx-0 md:0 text-white md:mt-1 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black"
        >
          See My Portfolio!
        </a>
      </div>
    </div>
  );
}

export default homePage;
