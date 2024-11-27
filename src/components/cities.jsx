import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cities from '../db/cities.json';

export default function PropertiesInCities() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 my-11 mb-11 pb-11 overflow-hidden px-6 py-6 w-full mt-20">
      <h2 className="text-2xl font-bold capitalize text-center mb-6">
        find properties in these cities
      </h2>
      <Slider
        {...sliderSettings}
        className="w-full gap-2 flex carousel-with-gap items-center">
        {cities.map((city, i) => {
          return (
            <CityCard
              key={i}
              city={city}
            />
          );
        })}
      </Slider>
    </div>
  );
}

function CityCard({ city }) {
  return (
    <div
      className="relative h-60 flex flex-col items-start justify-end rounded-md bg-cover bg-center cursor-pointer shadow-lg"
      style={{
        backgroundImage: `url(${city.image})`,
      }}>
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md"></div>
      <div className="relative z-10 text-white p-4">
        <h2 className="text-xl font-semibold">{city.location}</h2>
        <p className="text-sm"> {city.prop} properties</p>
      </div>
    </div>
  );
}
