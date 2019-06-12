const computeWeeklyCompletion = daysArray => {
  const completedCount = daysArray.filter(dayData => {
    return dayData.isCompleted;
  }).length;
  // DEBUG
  // console.log(completedCount);
  // console.log(completedCount / 7);
  return completedCount / 7;
};

module.exports = computeWeeklyCompletion;
