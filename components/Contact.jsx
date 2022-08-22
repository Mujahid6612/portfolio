import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiFillPhone,
} from "react-icons/ai";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="bg-black px-3 w-full">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#00df9a]">
          Contact
        </p>
        <h2 className="py-4 text-white">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-[#00df9a] rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2 text-white">Mujahid Ali</h2>
                <p className="text-[#00df9a]">Front-End Developer</p>
                <p className="py-4 text-white">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-[#00df9a]">Connect With Me</p>
                <div className="flex items-center justify-start  py-4">
                  {/* <a href="https://web.whatsapp.com/" target="_blank">
                    <div className="rounded-full shadow-lg shadow-[#00df9a] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineWhatsApp className="text-[#00df9a]"  size={25} />
                    </div>
                  </a>
                  <a href="https://www.facebook.com/" target="_blank">
                    <div className="rounded-full shadow-lg shadow-[#00df9a] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiFillFacebook  className="text-[#00df9a]" size={25} />
                    </div>
                  </a> */}
                  <div className="flex flex-col w-full">
                    <Link href={""}>
                      <div className="flex rounded shadow-lg shadow-[#00df9a] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail className="text-[#00df9a]" size={25} />
                        <p className="ml-3 text-[#00df9a] ">
                          mujahidali6612@gmail.com
                        </p>
                      </div>
                    </Link>
                    <Link href={""}>
                      <div className="flex rounded shadow-lg shadow-[#00df9a] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiFillPhone className="text-[#00df9a]" size={25} />
                        <p className="ml-3 text-[#00df9a] ">
                          (+92) 0311-4103274
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* <Link href="/resume">
                    <div className="ml-6 rounded-full shadow-lg shadow-[#00df9a] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill  className="text-[#00df9a]" size={25} />
                    </div>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-lg shadow-[#00df9a] rounded-xl lg:p-4">
            <img
              className="h-full rounded-xl hover:scale-105 ease-in duration-300"
              src="https://www.touchdynamic.com/wp-content/uploads/2014/02/bigstock-hand-pushing-on-a-touch-screen-43291297.jpg"
              alt="/"
            />

            {/*    <div className='p-4'>
              <form
                // onSubmit={handleSubmit}
                // action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                // method='POST'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2  border-gray-300'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>*/}
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-[#00df9a] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#00df9a]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
