import { Link } from "react-router-dom";
import React from "react";

const Hajj_Package_1 = () => {
  return (
    <div>
      <div className="flex justify-around">
        <div>
          <h1 className="text-4xl">Ansar Vip</h1>
          {/* Item 1 */}
          <div className="item flex justify-around w-[25rem] mt-8 mb-8">
            <div>
              <img
                src="https://adamtravel.com/wp-content/uploads/2021/03/imgonline-com-ua-twotoone-1ujM8KfYXeaYut.png"
                alt=""
              />
            </div>
            <div className="text-lg ml-2">
              <div>Chambre Double</div>
              <div>Prix: 9 050 000 CFA Par PERSON</div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="item flex justify-around w-[25rem] mt-8 mb-8">
            <div>
              <img
                src="https://adamtravel.com/wp-content/uploads/2021/03/imgonline-com-ua-twotoone-UyYyjda7cpBhoN.png"
                alt=""
              />
            </div>
            <div className="text-lg">
              <div>Chambre Triple</div>
              <div>Prix: 8 500 000 CFA Par PERSON</div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="item flex justify-around w-[25rem] mt-8 mb-8">
            <div>
              <img
                src="https://adamtravel.com/wp-content/uploads/2021/03/imgonline-com-ua-twotoone-JBUGuX7crl.png"
                alt=""
              />
            </div>
            <div className="text-lg mr-2">
              <div>Chambre Quadruple</div>
              <div>Prix: 7 300 000 CFA Par PERSON</div>
            </div>
          </div>

          {/* Book button */}
          <div className="text-center">
            <button class="px-8 z-30 py-4 bg-blue-800 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-900 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-2xl">
              <Link to="/hajj_book">Réserver Maintenant</Link>
            </button>
          </div>
        </div>
        <div className="right_image">
          <img
            src="https://adamtravel.com/wp-content/uploads/2021/03/tumblr_inline_p35hex5tZ61snaze1_500.jpg"
            style={{
              borderRadius: "1px 105px 24px 152px",
              boxShadow: "-11px 0px 16px 0px rgba(0, 0, 0, 0.77)",
            }}
            className="w-[85%]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hajj_Package_1;
