const DateNavigation = () => {
  const currentDate = new Date();

  return (
    <div className="date-navigation">
      <button>prev</button>
      <span>
        {currentDate.toLocaleDateString("it-IT", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
      <button>next</button>
    </div>
  );
};

export default DateNavigation;
