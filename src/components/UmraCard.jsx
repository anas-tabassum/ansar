import { useEffect } from "react";
import { Link } from "react-router-dom";

const UmraCard = ({ item }) => {
  return (
    <div className="w-full max-w-lg md:max-w-4xl mt-8 p-4 md:p-6 rounded-lg bg-gray-200 border border-white-300 shadow-lg overflow-hidden">
      <h2 className="text-xl font-semibold">{item.title}</h2>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2">
        <div className="flex flex-wrap space-x-2 md:space-x-4">
          <p>{item.start_date}</p>
          <p> - </p>
          <p>{item.end_date}</p>
        </div>

        <div className="flex flex-col">
          <div className="mt-2 md:mt-0 md:ml-auto">
            <p className="text-right font-bold text-lg">
              À partir de: {item.price} CFA
            </p>
          </div>

          <div className="mt-2 text-right">
            <Link
              to="/umra_book"
              state={{ identifier: "umra" ,meta:`${item.start_date} - ${item.end_date}`}}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Book now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmraCard;
