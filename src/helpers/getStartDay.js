export const getStartDate = () => {
  const d = new Date(); // today!

  return d.toISOString().slice(0, 10);
};
