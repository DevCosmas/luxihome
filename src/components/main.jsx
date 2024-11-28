import { PiCity } from 'react-icons/pi';
import { MdSecurity } from 'react-icons/md';
import { TbShield } from 'react-icons/tb';
import Featured from './featured';
import PropertiesInCities from './cities';
import HowItWork from './how';
import ReviewComponent from './review';
import BestProp from './best';
import MeetOurExperts from './expert';
import PopularComponent from './popular';

export default function Main() {
  return (
    <main className="w-full bg-white  text-slate-900">
      <div className="my-11 px-2">
        <h1 className="text-3xl px-2 mb-4 capitalize text-center w-full sm:w-1/2 mx-auto font-bold">
          why you should work with us
        </h1>
        <p className="w-full text-center px-4 sm:w-1/2 mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        </p>

        {/*  content flex */}
        <div
          className="flex flex-col gap-6 md:flex-row w-full my-11 mx-auto sm:w-4/5
         justify-between items-center ">
          <ContentCard
            icon={<PiCity size={50} />}
            h2_text="Wide range of property"
            p_text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ulla"
          />
          <ContentCard
            icon={
              <TbShield
                className="rotate-180"
                size={50}
              />
            }
            h2_text="Buy or rent Homes"
            p_text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ulla"
          />
          <ContentCard
            icon={<MdSecurity size={50} />}
            h2_text="trusted by millions"
            p_text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ulla"
          />
        </div>
      </div>

      {/* featured category */}
      <Featured />

      {/* properties in cities */}
      <PropertiesInCities />

      {/* how it works */}

      <HowItWork />

      {/* customer review */}

      <ReviewComponent />

      {/* Best Property Category */}
      <BestProp />

      {/* meet experts */}
      <MeetOurExperts />

      {/* popular Esstate component */}
      <PopularComponent />
    </main>
  );
}

function ContentCard({ icon, h2_text, p_text }) {
  return (
    <div className="flex px-4 text-center flex-col items-start gap-2 md:gap-2 md:items-center md:justify-center">
      <span className="flex flex-row sm:flex-col gap-1 sm:justify-center items-center">
        {icon}
        <h2 className="font-bold text-base capitalize">{h2_text}</h2>
      </span>
      <p className="w-4/5 sm:text-center text-left">{p_text}</p>
    </div>
  );
}
