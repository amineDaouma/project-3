const findTodayWithinArray = dateArray => {
  const now = new Date().toISOString().slice(0, 10);
  const today = dateArray.find(element => {
    const slicedDate = element.date.slice(0, 10);
    return now === slicedDate;
  });
  return today;
};

export { findTodayWithinArray };
