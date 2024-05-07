import { useState, useEffect } from "react";

import "./App.css";
import DateNavigation from "./components/DateNavigation";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNasaData = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${
            import.meta.env.VITE_NASA_API_KEY
          }`
        );
        if (!response.ok) {
          throw new Error(`Qualcosa è andato storto: ${response.status}`);
        }
        let responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNasaData();
  }, []);

  return (
    <>
      <DateNavigation />
      <div>
        {isLoading ? <h2>Is Loading...</h2> : <h2>I GOT YOU COVERED!</h2>}
      </div>
    </>
  );
}

export default App;
