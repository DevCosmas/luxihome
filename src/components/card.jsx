import { CiStar } from 'react-icons/ci';
import { useState } from 'react';
import reviews from '../db/review.json';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

export function ReviewCardRight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const { img, name, role, feedback } = reviews[currentIndex];

  return (
    <div className="w-full sm:w-1/2  p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <img
            src={img}
            alt={`${name}'s profile`}
            className="w-12 h-12 rounded-full object-cover"
          />
          <span>
            <h1 className="text-lg font-semibold">{name}</h1>
            <p className="text-sm text-gray-500">{role}</p>
          </span>
        </div>
        <RiDoubleQuotesR className="text-gray-900 text-3xl" />
      </div>
      <p className="text-gray-600 italic mb-4">{feedback}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-transparent border border-black  rounded-full  transition">
          <FaLongArrowAltLeft />
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-transparent border border-black rounded-full transition">
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}

export function ReviewCardLeft() {
  return (
    <div className="w-full sm:w-1/2 flex flex-col justify-between p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl capitalize">
          What are our customers saying about us
        </h2>
        <p className="text-gray-600">
          Phasellus scelerisque, libero non congue posuere, ipsum ante consequat
          tincidunt urna gravida non. Ut aliquet orci nec tortor feugiat, ac
        </p>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div>
          <h3 className="font-bold uppercase text-xl">40M+</h3>
          <p className="text-sm text-gray-500">Happy people</p>
        </div>
        <div>
          <h3 className="font-bold uppercase text-xl">4.88</h3>
          <p className="text-sm text-gray-500">Overall rating</p>
          <div className="flex items-center gap-1">
            <CiStar className="fill-yellow-600 text-xl" />
            <CiStar className="fill-yellow-600 text-xl" />
            <CiStar className="fill-yellow-600 text-xl" />
            <CiStar className="fill-yellow-600 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
