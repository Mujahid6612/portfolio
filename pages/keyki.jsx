import Image from "next/image";
import React from "react";
import keykiImg from "../public/assets/projects/keyki2.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const keyki = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={keykiImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Keyki App</h2>
          <h3>React-Native/ Redux-Toolkit / Redux-Saga</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app named as Keyki was built using React Native and is hosted on specific
            sever. Users are able to search Products based on the names, rating,
            or catagory to retrieve a list of active Products currently for
            sale. You will be able to view product information as well as the
            specific price, color and quantity.A User can also become a Host by
            provided feature in this app. User authentication is available so
            you can signup & signin to your account with an Google, Facebook
            account in order to save your favorite products. This is an
            amazing app you should visit it at least once.
          </p>
          <a target={'_blank'} href={'https://www.keyki.pk/'}><button className="px-8 py-2 mt-4 mr-8">Demo</button></a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React-Native
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux-Saga
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Video player
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux-Toolkit
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default keyki;
