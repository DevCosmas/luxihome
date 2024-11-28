import img from '../asset/img/luxi-modern-0.jpg';
import img1 from '../asset/img/luxi-modern-2.jpg';
import img2 from '../asset/img/luxi-fam-0.jpg';
import { BsBank2 } from 'react-icons/bs';
import { TbHomeSearch } from 'react-icons/tb';
import { GiKeyring } from 'react-icons/gi';
import { GiVideoConference } from 'react-icons/gi';

export default function HowItWork() {
  return (
    <div className=" mt-20">
      <div className="flex md:flex-row px-4 flex-col-reverse gap-6 items-start w-full sm:w-4/5 mx-auto">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="relative grid grid-cols-2 grid-rows-3 w-full md:w-1/2 gap-4 p-4">
      {/* Large Image Spanning Two Columns */}
      <div className="col-span-2 max-w-[350px] max-h-[250px] overflow-hidden">
        <img
          src={img2}
          alt="Large Property"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Smaller Image 1 */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt="Small Property 1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Tall Image Spanning Two Rows */}
      <div className="row-span-2 max-h-[300px] rounded-lg overflow-hidden">
        <img
          src={img1}
          alt="Small Property 1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Centered Absolute Div */}
      <div className="absolute  inset-0 flex justify-center items-center bg-transparent">
        <div className="flex -mt-60 px-2 py-2 rounded-lg gap-4 bg-white items-center ">
          <span className="flex flex-col text-slate-50  py-2 px-2 rounded-full justify-center items-center bg-green-800">
            <BsBank2 size={20} />
          </span>
          <span>
            <p className="text-sm">Properties for Sale</p>
            <h1 className="font-bold">30K</h1>
          </span>
        </div>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="w-full md:w-1/2">
      <div>
        <span className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl capitalize">
            how it works ? find a perfect Home
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
            nulla in eros vestibulum tincidunt{' '}
          </p>
        </span>

        <div className="flex flex-col mt-11 gap-6">
          <RightSideList
            title={'find real Estate'}
            text={` Morbi condimentum ut metus a laoreet. Curabitur vehicula ante sit
            eleifend, euismod feugiat lorem`}
            icon={
              <TbHomeSearch
                className="relative ml-2  z-10"
                size={30}
              />
            }
          />
          <RightSideList
            title={'meet the realtors'}
            text={` Morbi condimentum ut metus a laoreet. Curabitur vehicula ante sit
            eleifend, euismod feugiat lorem`}
            icon={
              <GiVideoConference
                className="relative ml-2  z-10"
                size={30}
              />
            }
          />
          <RightSideList
            title={'take the keys'}
            text={` Morbi condimentum ut metus a laoreet. Curabitur vehicula ante sit
            eleifend, euismod feugiat lorem`}
            icon={
              <GiKeyring
                className="relative ml-2  z-10"
                size={30}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

function RightSideList({ title, icon, text }) {
  return (
    <ul className="">
      <li className="flex items-start gap-3">
        <span className="relative  before:bg-yellow-300 before:content-[''] before:w-5 before: before:h-5 before:rounded-full before:absolute before:left-0 before:top-3">
          {/* icon */}
          {icon}
        </span>

        <span>
          {/* title */}
          <h1 className="font-bold capitalize">{title}</h1>
          {/* content */}
          <p>{text}</p>
        </span>
      </li>
    </ul>
  );
}
