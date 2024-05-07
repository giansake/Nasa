const DateNavigation = () => {
  const currentDate = new Date();

  return (
    <div className="date-navigation">
      <button>prev</button>
      <span>{currentDate.toString()}</span>
      <button>next</button>
    </div>
  );
};

export default DateNavigation;
