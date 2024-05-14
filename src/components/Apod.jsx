import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";

const Apod = ({ currentDate }) => {
  const { remainingRequests, setRemainingRequests } = useContext(ThemeContext);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setError(null);
    const fetchNasaData = async () => {
      setIsLoading(true);

      if (remainingRequests > 1200 || remainingRequests === -1) {
        try {
          const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${
              import.meta.env.VITE_NASA_API_KEY
            }&date=${formatDate(currentDate)}`
          );
          if (!response.ok) {
            throw new Error(`Qualcosa è andato storto: ${response.status}`);
          }
          setRemainingRequests(response.headers.get("x-ratelimit-remaining"));
          let responseData = await response.json();
          setData(responseData);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        setError(
          `Occhio che stai per finire le request per la tua api key: ${remainingRequests}`
        );
      }
    };

    fetchNasaData();
  }, [currentDate]);

  console.log(error);
  return (
    <div>
      {isLoading && error === null ? (
        <h2>Is Loading...</h2>
      ) : error === null ? (
        <div className="page-container">
          <div className="page-text-description">
            <h2>{data.title}</h2>
            <p>{data.explanation}</p>
          </div>
          <div className="page-asset-wrapper">
            {data.media_type === "video" ? (
              <h2>VIDEO</h2>
            ) : (
              <img className="apod-image" src={data.url} alt="" />
            )}
          </div>
        </div>
      ) : (
        <h2>{error}</h2>
      )}
    </div>
  );
};
export default Apod;

function formatDate(date) {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month; // Adding leading zero for single digit months
  }
  let day = date.getDate();
  if (day < 10) {
    day = "0" + day; // Adding leading zero for single digit days
  }
  return `${year}-${month}-${day}`;
}
