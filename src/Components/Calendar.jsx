import React from 'react';
import Cal from './Cal'; 
import Requests from './Requests'; 
import Announcements from './Announcements'; 

export default function Calendar() {
  return (
    <div className="bg-[#EAE9E3] w-full h-full">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <img src="/pics/logosm.svg" className="w-12 ml-4" alt="Logo" />
          <img src="/pics/title.svg" className="w-56 ml-12" alt="Title" />
        </div>

        <div className="flex items-center space-x-16">
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search anything..."
              className="w-72 h-10 pl-4 pr-12 placeholder:text-sm -mr-6 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#417398] placeholder:font-[GeneralSans] placeholder:text-gray-500"
              style={{ fontFamily: '"General Sans", sans-serif' }}
            />
            <img
              src="/pics/search.svg"
              alt="Search"
              className="w-9 h-9 absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2"
            />
          </div>

          <div className="flex items-center space-x-2">
            <img src="/pics/message.svg" className="w-12 -ml-12 cursor-pointer" alt="Messages" />
            <img src="/pics/notification.svg" className="w-12 cursor-pointer" alt="Notifications" />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="bg-[#FFFFFF] w-12 ml-8 rounded-full mt-5 h-full flex flex-col justify-between py-4 items-center">
          <div className="flex flex-col space-y-0 justify-center items-center">
            <img src="/pics/1.svg" className="w-9 hover:scale-110 cursor-pointer" alt="Home" />
            <img src="/pics/2.svg" className="w-10 hover:scale-110 cursor-pointer" alt="Settings" />
            <img src="/pics/3.svg" className="w-10 hover:scale-110 cursor-pointer" alt="Profile" />
            <img src="/pics/4.svg" className="w-10 hover:scale-110 cursor-pointer" alt="Notifications" />
            <img src="/pics/5.svg" className="w-10 hover:scale-110 cursor-pointer" alt="Messages" />
          </div>

          <div className="flex flex-col mt-7 -mb-4 space-y-0">
            <img src="/pics/6.svg" className="w-10 hover:scale-110 cursor-pointer" alt="Logout" />
            <img src="/pics/7.svg" className="w-10 hover:scale-110 cursor-pointer" alt="Settings" />
          </div>
        </div>

        <div className="flex-1 flex justify-between ml-10">
          <div className="flex-1 mr-5">
            <Cal /> 
          </div>

          <div className="w-80 mt-6 justify-center items-center mr-10 bg-white p-4 rounded-3xl h-[450px] shadow-lg">
            <Announcements /> 
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-6 mt-6 mx-10">
        <div className="flex flex-col space-y-4 -mt-44">
          <img src="/pics/10.svg" className="w-8 hover:scale-110 cursor-pointer" alt="Logout" />
          <img src="/pics/icon.svg" className="w-7 hover:scale-110 cursor-pointer" alt="Settings" />
        </div>

        <div className="bg-white p-4 rounded-3xl shadow-lg w-full ml-6 mb-10">
          <Requests /> 
        </div>
      </div>
    </div>
  );
}
