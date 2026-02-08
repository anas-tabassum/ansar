import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import MyRoutes from "./routes/MyRoutes";
import "flowbite";
import "./App.css";
import { YearProvider } from "./store/YearContext";

const App = () => {
    useEffect(() => {
          initFlowbite();
    }, []);

    return (
          <YearProvider>
            <div>
              <MyRoutes />
      </div>
      </YearProvider>
    );
};

export default App;
