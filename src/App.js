import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import MyRoutes from "./routes/MyRoutes";
import "flowbite";
import "./App.css";

const App = () => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div>
      <MyRoutes />
    </div>
  );
};

export default App;
