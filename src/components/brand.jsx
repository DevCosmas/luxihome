import { FaAmazon } from 'react-icons/fa';
import { SiPearson } from 'react-icons/si';
import { SiNubank } from 'react-icons/si';
import { MdOutlineRealEstateAgent } from 'react-icons/md';
import { GoLaw } from 'react-icons/go';

export default function BrandSupport() {
  return (
    <div className="mt-11 border-t py-2 w-full sm:w-4/5 mx-auto my-11 border-black">
      <h1 className="text-base mb-4 text-center">
        Thousands of Leading company trust us
      </h1>

      <span className="flex items-center flex-wrap justify-between">
        <FaAmazon size={30} />
        <span className="flex items-center gap-1 font-bold capitalize">
          <SiNubank size={30} />
          <p>Bank</p>
        </span>
        <span className="flex items-center gap-1 font-bold capitalize">
          <SiPearson size={30} />
          <p>pearson</p>
        </span>
        <span className="flex items-center gap-1 font-bold capitalize">
          <GoLaw size={30} />
          <p>GoLaw</p>
        </span>
        <MdOutlineRealEstateAgent size={30} />
      </span>
    </div>
  );
}
