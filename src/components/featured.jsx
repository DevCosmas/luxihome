import { Link, Outlet } from 'react-router-dom';
import AllProperties from './all';

export default function Featured() {
  return (
    <div className="w-full my-11 flex flex-col px-6 sm:px-11">
      <h1 className="text-center text-3xl capitalize font-bold my-4">
        Feature Properties
      </h1>
      <div>
        <nav className="w-full">
          <ul className="flex text-base items-center capitalize gap-6 justify-around">
            <li className="flex flex-col items-center justify-center px-2 py-1 w-20 bg-green-300 rounded-full">
              <Link to={'/feature/'}>All</Link>
            </li>
            <li className="flex flex-col items-center justify-center px-2 py-1 w-20 bg-yellow-300 rounded-full">
              <Link to={'/feature/rent'}>rent</Link>
            </li>
            <li className="flex flex-col items-center justify-center px-2 py-1 w-20 bg-gray-300 rounded-full">
              <Link to={'/feature/sale'}>sale</Link>
            </li>
          </ul>
        </nav>

        <div className="w-full">
          <AllProperties />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
