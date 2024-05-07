const DateNavigation = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("it-IT", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="date-navigation">
      <button>prev</button>
      <span>{formattedDate}</span>
      <button>next</button>
    </div>
  );
};

export default DateNavigation;
