import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router-dom';
export default function Logo({ color = 'black' }) {
  return (
    <div>
      <Link
        className={`text-${color}`}
        to={'/'}>
        <span className="flex items-center">
          <h1 className="font-bold text-lg">Luxi</h1>
          <IoHome size={20} />
        </span>
      </Link>
    </div>
  );
}
