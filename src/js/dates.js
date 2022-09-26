export function GetDatesInMonth(year, month) {
  const currentDate = new Date();
  year = year ?? currentDate.getFullYear();
  month = month ?? currentDate.getMonth();
  const date = new Date(year, month);
  let dates = [];
  while (date.getMonth() == month) {
    dates.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }

  return dates;
}
