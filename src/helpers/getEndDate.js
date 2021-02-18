export const getEndDate = (days) => {
  const d = new Date(); // today!

  const x = days; // go back X days!
  d.setDate(d.getDate() - x);

  return d.toISOString().slice(0, 10);
};
