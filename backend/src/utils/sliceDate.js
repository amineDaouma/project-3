const sliceDate = date => {
  if (typeof date !== Date) {
    date = new Date(date);
  }
  //   console.log(typeof date);
  return date.toISOString().slice(0, 10);
};

module.exports = sliceDate;
