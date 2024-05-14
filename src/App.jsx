import { useState, useEffect } from "react";
import DateNavigation from "./components/DateNavigation";
import Apod from "./components/Apod";

import "./App.css";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <>
      <DateNavigation setCurrentDate={setCurrentDate} />
      <Apod currentDate={currentDate} />
    </>
  );
}

export default App;
