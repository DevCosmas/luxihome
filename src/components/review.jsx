import { ReviewCardRight, ReviewCardLeft } from './card';
import BrandSupport from './brand';

export default function ReviewComponent() {
  return (
    <div className="bg-rose-100 flex flex-col gap-4 sm:px-11 px-4">
      <div className=" flex flex-col md:flex-row items-stretch sm:px-11 gap-8 py-6 px-4">
        <ReviewCardLeft />
        <ReviewCardRight />
      </div>

      <BrandSupport />
    </div>
  );
}
