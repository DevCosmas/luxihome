export default function PopularComponent() {
  return (
    <div className="bg-gray-100 pb-20 py-10">
      <h1 className="text-center font-bold mb-2 text-2xl">
        Popular Real Estate Available
      </h1>
      <p className="text-center text-sm sm:text-base mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
      </p>

      {/* List */}
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap w-full sm:justify-center gap-4">
        {Array.from({ length: 7 }, (_, index) => (
          <PopularList
            key={index}
            text={`Lorem ipsum dolor gun, ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function PopularList({ text }) {
  return (
    <p className="border text-sm border-slate-900 bg-transparent  rounded-full py-2 px-4 text-gray-800 font-medium text-center transition ">
      {text}
    </p>
  );
}
