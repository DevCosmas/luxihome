import { Link, Outlet } from 'react-router-dom';
import AllProperties from './all';
import { useState, useEffect } from 'react';
import data from '../db/data.json';

export default function Featured() {
  const [category, setCategory] = useState('all');
  const [propData, setPropData] = useState([]);

  function handleCategory(e) {
    console.log(e.target.id);
    setCategory(e.target.id);
  }
  useEffect(() => {
    console.log(category);
    if (category === 'all') {
      setPropData(data);
    } else {
      setPropData(data.filter((item) => item.category === category));
    }

    console.log(propData);
  }, [category, propData]);

  return (
    <div className="w-full my-11 flex flex-col px-6 sm:px-11">
      <h1 className="text-center text-3xl capitalize font-bold my-4">
        Feature Properties
      </h1>
      <div>
        <nav className="w-full">
          <ul className="flex text-base items-center capitalize gap-6 justify-around">
            <li
              onClick={(e) => handleCategory(e)}
              id="all"
              className="flex flex-col items-center cursor-pointer justify-center px-2 py-1 w-20 bg-green-300 rounded-full">
              all
            </li>
            <li
              onClick={(e) => handleCategory(e)}
              id="rent"
              className="flex flex-col cursor-pointer items-center justify-center px-2 py-1 w-20 bg-yellow-300 rounded-full">
              rent
            </li>
            <li
              onClick={(e) => handleCategory(e)}
              id="sale"
              className="flex flex-col cursor-pointer items-center justify-center px-2 py-1 w-20 bg-gray-300 rounded-full">
              Sale
            </li>
          </ul>
        </nav>

        <div className="w-full">
          <AllProperties propData={propData} />
        </div>
      </div>
    </div>
  );
}
