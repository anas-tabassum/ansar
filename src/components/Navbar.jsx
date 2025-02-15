import logo from "../media/logo2.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomDropdown from "./CustomDropdown";

const Navbar = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false); // Initially set to false
  const [navbarOpen, setNavbarOpen] = useState(false); // Added state for mobile menu

  const hideDropDown = () => {
    setNavbarOpen(false);
  };

  const hideServicesDropDown = () => {
    setServicesDropdown(false);
  };

  const showServicesDropDown = () => {
    setServicesDropdown(true);
  };

  const navigate = useNavigate();

  const handleNavigation = (value) => {
    if (value) {
      navigate(value);
      hideDropDown();
    }
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 relative z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto custom-margin-top h-[9rem]">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="w-40" alt="Logo" />
          </NavLink>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={navbarOpen ? "true" : "false"}
            onClick={() => setNavbarOpen(!navbarOpen)} // Toggle navbar
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`${
              navbarOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`} // Handle mobile menu visibility
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  onClick={hideDropDown} // Close dropdown when clicked
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }
                >
                  Accueil
                </NavLink>
              </li>

              {/* Services for desktop */}
              <li
                id="dropdownDelayButton"
                onMouseEnter={showServicesDropDown} // Show dropdown on hover
                onMouseLeave={hideServicesDropDown} // Hide dropdown when mouse leaves
                className="relative flex cursor-pointer ml-2 z-50 hidden md:flex"
              >
                Services
                <svg
                  className="w-2.5 h-2.5 ms-3 mt-2"
                  style={{ marginLeft: "3px" }}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <div
                  id="dropdownDelay"
                  style={{ marginLeft: "-3rem" }}
                  className={`absolute z-10 ${
                    servicesDropdown ? "block" : "hidden"
                  } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-full`} // Positioning dropdown below Services
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200 services_ul !text-left text-[13px]"
                    aria-labelledby="dropdownDelayButton"
                  >
                    <li>
                      <NavLink
                        to="ticket"
                        onClick={hideDropDown} // Close dropdown when clicked
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Réserver un billet
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="umra"
                        onClick={hideDropDown} // Close dropdown when clicked
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Réserver une Omra
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="hajj"
                        onClick={hideDropDown} // Close dropdown when clicked
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Réserver un Hajj
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Services for Mobile and Tablet */}
              <CustomDropdown onSelect={handleNavigation} />

              <li>
                <NavLink
                  to="/guide"
                  onClick={hideDropDown}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }
                >
                  Guide
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  onClick={hideDropDown}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }
                >
                  Galerie
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lesson"
                  onClick={hideDropDown}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }
                >
                  Leçons
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={hideDropDown}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }
                >
                  À propos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={hideDropDown}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }
                >
                  Contact
                </NavLink>
              </li>

              {/* <li>
                <NavLink
                  to="/records"
                  onClick={hideDropDown}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }
                >
                  Records
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
