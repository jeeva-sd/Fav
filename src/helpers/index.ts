export const getWeekDifference = (date: string) => {
  const today:any = new Date();
  const otherDate:any = new Date(date);
  const diffWeeks = Math.round((otherDate - today) / (7 * 24 * 60 * 60 * 1000));

  return Math.abs(diffWeeks);
};