import Header from './header';
import { FaSearch } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { MdApartment } from 'react-icons/md';
import { FaMountainCity } from 'react-icons/fa6';

export default function HeroSection() {
  return (
    <div className="hero w-full py-11 pb-11 relative">
      <Header />
      <div className="bg-black pb-16 bg-opacity-20 top-0 bottom-0 min-h-full right-0 left-0 absolute flex flex-col gap-11">
        <div className="my-11 mt-24 flex flex-col text-teal-950 justify-center items-center px-6">
          <button className="bg-transparent mt-8 border text-teal-900 font-bold px-2 py-2 border-teal-900 rounded-full mx-auto sm:w-60 w-full">
            Let Guide You Home
          </button>
          <h1 className="font-bold text-teal-950 mt-6 text-3xl sm:w-1/2 w-full mx-auto text-center">
            Believe in Finding It
          </h1>
          <p className="font-bold mt-6 capitalize text-slate-200">
            Search for properties for sale and to rent in Nigeria
          </p>

          {/* search bar */}
          <span className="flex mt-11 mx-auto bg-slate-50 justify-between items-center px-2 py-2 rounded-full w-full sm:w-1/2">
            <input
              className="flex-grow bg-transparent outline-none border-none px-2"
              type="text"
              placeholder="Enter keywords"
            />
            <button className="bg-yellow-600 font-bold text-slate-50 flex-col flex justify-center items-center px-2 py-2 rounded-full">
              <FaSearch size={20} />
            </button>
          </span>

          <p className="text-slate-50 font-semibold capitalize mt-11">
            what are you looking for ?
          </p>

          {/* summary box */}

          <div className="sm:flex sm:items-center gap-8 mt-11 sm:flex-wrap grid grid-cols-2 pb-20 mb-11">
            <span className="backdrop-blur-xl px-2 py-2 gap-2 rounded-full flex items-center justify-between">
              <span className="bg-slate-50 font-bold text-slate-950 flex-col flex justify-center items-center px-2 py-2 rounded-full">
                <IoHome size={20} />
              </span>
              <p className="w-full  text-slate-50">Modern Living</p>
            </span>

            <span className="backdrop-blur-xl px-2 py-2 gap-2 rounded-full flex items-center justify-between">
              <span className="bg-slate-50 font-bold text-slate-950 flex-col flex justify-center items-center px-2 py-2 rounded-full">
                <MdApartment size={20} />
              </span>
              <p className="w-full  text-slate-50">Apartment</p>
            </span>

            <span className="backdrop-blur-xl px-2 py-2 gap-2 rounded-full flex items-center justify-between">
              <span className="bg-slate-50 font-bold text-slate-950 flex-col flex justify-center items-center px-2 py-2 rounded-full">
                <FaMountainCity size={20} />
              </span>
              <p className="w-full  text-slate-50">Town</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
