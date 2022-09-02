import Image from "next/image";
import React from "react";
import refillImg from "../public/assets/projects/refill.png";
import { RiRadioButtonFill } from "react-icons/ri";

import Link from "next/link";

const refill = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={refillImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Refill App</h2>
          <h3>React Native / Hooks / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app named as Refill was built using React Native and is hosted
            on sepecific server. This app consist of Two internal apps first for
            Patient and second for Driver. Patient user is able to order
            Medicine and also contact with doctors for consultation and is able
            to chat with specific Doctor and Driver and can see the Live
            Location of Driver while delivering his Order. Patient users are
            able to search their Order History based on an Order id to retrieve
            a list of order history and see order status. On the Orther Hand
            Driver users can Pick their suitable Order for Delivery and also
            able to chat with specific Patient and Operation manager and also
            able to Cancel the Order for any given reasones. Both users will be
            able to view Product information and details. User authentication is
            available so you can signup & signin in order to save your favorite
            Products. This is continueing app...
          </p>
          <a target={"_blank"} href={"https://www.refillsa.com/"}>
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React-Native
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Hooks
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Maps API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Language Switch
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

export default refill;
