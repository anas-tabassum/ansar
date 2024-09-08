import { Link } from "react-router-dom";

const Umra = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold text-center">Umra Packages</h1>

      <div className="w-full max-w-lg md:max-w-4xl mt-8 p-4 md:p-6 rounded-lg bg-gray-200 border border-white-300 shadow-lg overflow-hidden">
        <h2 className="text-xl font-semibold">Umra 2024</h2>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2">
          <div className="flex flex-wrap space-x-2 md:space-x-4">
            <p>Sept 20, 2024</p>
            <p> - </p>
            <p>Sept 30, 2024</p>
          </div>

          <div className="flex flex-col">
            <div className="mt-2 md:mt-0 md:ml-auto">
              <p className="text-right font-bold text-lg">Starting at $2500</p>
            </div>

            <div className="mt-2 text-right">
              <Link
                to="/book"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Book now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Umra;
