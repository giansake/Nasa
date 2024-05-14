import { useState } from "react";
import { ThemeProvider } from "./components/context/ThemeProvider";
import DateNavigation from "./components/DateNavigation";
import Apod from "./components/Apod";

import "./App.css";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <ThemeProvider>
      <DateNavigation setCurrentDate={setCurrentDate} />
      <Apod currentDate={currentDate} />
    </ThemeProvider>
  );
}

export default App;
