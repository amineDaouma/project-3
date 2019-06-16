const computeWeeklyCompletion = daysArray => {
  const completedCount = daysArray.filter(dayData => {
    return dayData.isCompleted;
  }).length;
  return completedCount / 7;
};

module.exports = computeWeeklyCompletion;
