import bgImg from '../asset/img/luxi-modern-0.jpg';
import bgImg1 from '../asset/img/luxi-modern-6.jpg';
import bgImg2 from '../asset/img/luxi-modern-4.jpg';
import img1 from '../asset/img/luxi-modern-2.jpg';

import { PiBathtub } from 'react-icons/pi';
import { TbBed } from 'react-icons/tb';
import { LuMapPin } from 'react-icons/lu';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function BestProp() {
  return (
    <div className="bg-black py-8 sm:py-11 px-6 flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl text-slate-50 mb-6 text-center">
        Best Selling Property
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full  max-w-3xl">
        <BestLeftCard />
        <BestRightCard />
      </div>
    </div>
  );
}

function BestLeftCard() {
  return (
    <div
      className="flex flex-col justify-between rounded-md overflow-hidden h-full bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${img1})`,
      }}>
      {/* <div className="absolute inset-0 bg-black/40"></div> */}
      <div className="relative z-10 p-6 space-y-60 flex flex-col justify-between">
        <div className="flex gap-2">
          <span className="bg-green-700 text-white text-sm rounded-full px-4 py-1">
            For Rent
          </span>
          <span className="bg-yellow-500 text-white text-sm rounded-full px-4 py-1">
            Featured
          </span>
        </div>

        <div className="backdrop-blur-md px-2 py-2 rounded-lg ">
          <h2 className="text-white text-2xl font-bold">Modern Family Home</h2>
          <div className="flex items-center text-white text-sm space-x-2">
            <LuMapPin />
            <p>Katampe, Abuja</p>
          </div>
          <div className="flex items-center justify-between text-white mt-4">
            <p className="font-bold text-lg">$300,000,000</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <TbBed className="text-lg" />
                <span>6</span>
              </div>
              <div className="flex items-center space-x-1">
                <PiBathtub className="text-lg" />
                <span>4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BestRightCard() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <img
          src={bgImg}
          alt="property"
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
      </div>
      <div>
        <img
          src={bgImg1}
          alt="property"
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
      </div>
      <div className="bg-yellow-400 px-2 py-4 text-slate-950 rounded-md shadow-lg">
        <span>
          <span className="flex text-sm font-bold flex-col ">
            <h1 className="text-2xl font-bold">500+</h1>
            <p>Properties</p>
          </span>
          <p className="text-sm mt-4">Lorem ipsum dolor sit amet Aliquid</p>
          <span>
            <button className=" flex flex-col justify-center ml-24 mt-11 items-center text-right px-4 py-1 bg-white text-slate-900 rounded-full shadow-md">
              <FaLongArrowAltRight />
            </button>
          </span>
        </span>
      </div>
    </div>
  );
}
