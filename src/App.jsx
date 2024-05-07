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
        // prova a fare una fetch
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${
            import.meta.env.VITE_NASA_API_KEY
          }`
        );
        // se la response non è andata in OK
        if (!response.ok) {
          // allora mostra il perché no
          throw new Error(`Qualcosa è andato storto: ${response.status}`);
        }
        // sennò, estrai il body della response (i dati veri e propri)
        let responseData = await response.json();
        // assegnali allo stato che ho chiamato 'data'
        setData(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNasaData();
  }, []);

  return (
    <>
      <DateNavigation />
      <h1>Hello world</h1>
    </>
  );
}

export default App;
