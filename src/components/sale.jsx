import { useState, useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { LuMapPin } from 'react-icons/lu';
import { PiBathtub } from 'react-icons/pi';
import { TbBed } from 'react-icons/tb';
import { IoEyeOutline } from 'react-icons/io5';
import { FaLongArrowAltRight } from 'react-icons/fa';
import data from '../db/data.json';

const salesPropData = data.map((data) => data.category === 'sale');
console.log(salesPropData);

export default function SaleProperties() {
  const [oneView, setOneView] = useState({
    status: false,
    data: null,
  });

  return (
    <div className="w-full sm:w-90 relative">
      <div className="my-11 w-full grid-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((prop, i) => (
          <Card
            cardData={prop}
            key={i}
            onView={() => setOneView({ data: prop, status: true })}
          />
        ))}
      </div>

      <button className="flex font-bold outline-none text-center justify-center mx-auto items-center capitalize gap-2 bg-yellow-600 px-2 py-1 rounded-full">
        <p>See all listings</p>
        <FaLongArrowAltRight />
      </button>

      {oneView.status && (
        <OnePropertyView
          data={oneView.data}
          onClose={() => setOneView({ ...oneView, status: false })}
        />
      )}
    </div>
  );
}

export function Card({ onView, cardData }) {
  console.log(onView);
  return (
    <div
      className="flex rounded-md h-60 flex-col items-start justify-between py-2 px-4 bg-cover bg-center cursor-pointer"
      style={{
        backgroundImage: `url(${cardData.bgImage})`,
      }}
      onClick={onView}>
      <div className="text-slate-50 capitalize flex text-sm items-center gap-4">
        <span className="flex flex-col bg-green-800 rounded-full text-center px-4 py-1">
          For {cardData.category}
        </span>
        <span className="flex flex-col bg-yellow-500 rounded-full px-4 py-1">
          Featured
        </span>
      </div>
      <div className="bg-white rounded-md text-base px-2 py-2 w-full">
        <span className="flex items-center justify-between mb-2">
          <h1 className="font-bold text-xl capitalize">{cardData.title}</h1>
          <IoEyeOutline />
        </span>
        <span className="flex items-center gap-2 capitalize">
          <LuMapPin />
          <p>{cardData.location}</p>
        </span>
        <div className="flex gap-4 my-2 justify-between items-center">
          <p className="text-red-500 font-bold ">
            ${cardData.price.toLocaleString()}
          </p>
          <div className="flex gap-4 items-center">
            <span className="flex text-sm border-r px-2 gap-2 items-center">
              <TbBed />
              <p>{cardData.bedrooms}</p>
            </span>
            <span className="flex text-sm gap-2 items-center">
              <PiBathtub />
              <p>{cardData.bathtubs}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OnePropertyView({ data, onClose }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView(
      [data.latitude, data.longitude],
      13
    );
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.marker([data.latitude, data.longitude])
      .addTo(map)
      .bindPopup(data.title)
      .openPopup();

    return () => {
      map.remove();
    };
  }, [data.latitude, data.longitude, data.title]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="p-4 fixed top-0 bottom-0 right-0 left-0 backdrop-blur-sm flex flex-col justify-center items-center z-50">
      <div className="w-full sm:w-4/5 md:w-1/2 bg-slate-100 py-4 px-4 flex flex-col rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className=" text-red-500 text-right mb-2 text-lg font-bold">
          &times;
        </button>
        <div className="flex mb-4 flex-col md:flex-row items-start md:items-center gap-4">
          {/* Image Slider */}
          <div className="rounded-md w-full md:w-1/2 h-64">
            <Slider {...sliderSettings}>
              {data.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Property  ${idx + 1}`}
                  className="w-full h-64 object-cover rounded-md"
                />
              ))}
            </Slider>
          </div>

          {/* Map */}
          <div
            ref={mapRef}
            className="rounded-md w-full md:w-1/2 h-64"
            style={{ background: '#f0f0f0' }}></div>
        </div>

        {/* property title */}
        <span className="flex my-2 items-center justify-between">
          <h1 className="font-bold text-xl">{data.title}</h1>
          <span className="flex items-center gap-2 capitalize">
            <LuMapPin />
            <p>{data.location}</p>
          </span>
        </span>
        {/* Meta Data */}
        <div className="flex gap-4 my-2 justify-between items-center">
          <p className="text-red-500 font-bold ">
            ${data.price.toLocaleString()}
          </p>
          <div className="flex gap-4 items-center">
            <span className="flex text-sm border-r px-2 gap-2 items-center">
              <TbBed />
              <p>{data.bedrooms}</p>
            </span>
            <span className="flex text-sm gap-2 items-center">
              <PiBathtub />
              <p>{data.bathtubs}</p>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
