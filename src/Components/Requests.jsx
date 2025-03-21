import React from 'react';

export default function Requests() {
  return (
    <div className="h-auto m-3">
      <div className="flex justify-between mb-4">
        <img src="/pics/req.svg" alt="Request Icon" />
        <img src="/pics/see.svg" alt="See Icon" />
      </div>

      <div className="-space-y-3 -mb-7 -mt-3">
        <div className="grid grid-cols-4 items-center border-b border-gray-300 last:border-b-0 ">
          <div className="h-20 flex items-center">
            <div className="flex text-sm items-center justify-center">
              <img src="/pics/12.svg" alt="See Icon" />
              <div className="ml-3">
                <p>Plumbing | 721 Meadoview</p>
                <p className="text-[#8F8E96] text-xs">Request ID: MR-001</p>
              </div>
            </div>
          </div>
          <div className="h-20 flex items-center justify-center">
            <p className="text-[#201F23] text-sm">Broken Garbage</p>
          </div>
          <div className="h-20 gap-1 -ml-1 flex items-center justify-center">
            <img src="/pics/i.svg" alt="See Icon" />
            <p>Jacob Jones</p>
          </div>
          <div className="h-20 flex items-center justify-center">
            <button>
              <img src="/pics/week.svg" alt="See Icon" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 items-center border-b border-gray-300 last:border-b-0">
          <div className="h-20 flex items-center">
            <div className="flex text-sm items-center justify-center">
              <img src="/pics/ii.svg" alt="See Icon" />
              <div className="ml-3">
                <p>Electrical | 721 Meadoview</p>
                <p className="text-[#8F8E96] text-xs">Request ID: MR-001</p>
              </div>
            </div>
          </div>
          <div className="h-20 flex items-center justify-center">
            <p className="text-[#201F23] text-sm">No Heat Bathroom</p>
          </div>
          <div className="h-20 flex gap-3 items-center justify-center ml-1">
            <img src="/pics/20.svg" alt="See Icon" />
            <p>Albert Flores</p>
          </div>
          <div className="h-20 flex items-center justify-center">
            <button>
              <img src="/pics/week.svg" alt="See Icon" />
            </button>
          </div>
        </div>

      
        <div className="grid grid-cols-4 items-center border-b border-gray-300 last:border-b-0">
          <div className="h-20 flex items-center">
            <div className="flex text-sm items-center justify-center">
              <img src="/pics/30.svg" alt="See Icon" />
              <div className="ml-3">
                <p>HVAC | 721 Meadoview</p>
                <p className="text-[#8F8E96] text-xs">Request ID: MR-001</p>
              </div>
            </div>
          </div>
          <div className="h-20 flex items-center justify-center">
            <p className="text-[#201F23] text-sm">Non Functional fan</p>
          </div>
          <div className="h-20 flex items-center justify-center gap-3">
            <img src="/pics/40.svg" alt="See Icon" />
            <p>Robert Fox</p>
          </div>
          <div className="h-20 flex items-center justify-center">
            <button>
              <img src="/pics/week.svg" alt="See Icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
