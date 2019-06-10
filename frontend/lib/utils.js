const findTodayWithinArray = dateArray => {
  const now = new Date().toISOString().slice(0, 10);
  //debug: changed today from const to let
  let today = dateArray.find(element => {
    const slicedDate = element.date.slice(0, 10);
    return now === slicedDate;
  });
  if (!today)
    throw new Error("There is no element with today's date within the array");
  return today;
};

export { findTodayWithinArray };
