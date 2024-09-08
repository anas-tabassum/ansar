import styles from "../styles/Services.module.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const val = e.target.value;
    console.log(val);
    if (val == "umra") {
      navigate("/umra");
    } else if (val == "hajj") {
      navigate("/hajj");
    } else if (val == "ticket") {
      navigate("/ticket");
    }
  };

  return (
    <div className={styles.services_container}>
      <form className="max-w-sm mx-auto my-2">
        {/* <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label> */}
        <select
          id="countries"
          onChange={changeHandler}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Select a service</option>
          <option value="ticket">Book a ticket</option>
          <option value="umra">Umra</option>
          <option value="hajj">Hajj</option>
        </select>
      </form>
    </div>
  );
};

export default Services;
