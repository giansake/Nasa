import { useState, useEffect } from "react";

const DateNavigation = ({ setCurrentDate }) => {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");

  const handleDate = (direction) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + direction);
    setDate(newDate);
  };

  useEffect(() => {
    setFormattedDate(
      date.toLocaleDateString("it-IT", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
    setCurrentDate(date);
  }, [date]);

  return (
    <div className="date-navigation">
      <button onClick={() => handleDate(-1)}>&larr;</button>
      <span>{formattedDate}</span>
      <button onClick={() => handleDate(1)}>&rarr;</button>
    </div>
  );
};

export default DateNavigation;
