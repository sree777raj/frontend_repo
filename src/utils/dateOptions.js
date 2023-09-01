import { subDays, format } from "date-fns";

export const dateOptions = (numberOfDays = 3) => {
  const today = new Date();
  const dateOptions = [];
  for (let i = 0; i < numberOfDays; i++) {
    const date = subDays(today, i);
    const label = format(date, "MMM dd, yyyy");
    const value = format(date, "yyyy-MM-dd");
    dateOptions.push({ label, value });
  }

  return dateOptions;
};
