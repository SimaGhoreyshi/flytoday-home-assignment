import moment, { min } from "jalali-moment";

export const enDateToWeekDay = (dateStr) => {
  if (dateStr) {
    return moment(dateStr, "YYYY-MM-DDTHH:mm:ss").locale("fa").format("dddd");
  }
};

export const enDateToFaDateFull = (dateStr) => {
  if (dateStr) {
    return moment(dateStr, "YYYY-MM-DDTHH:mm:ss")
      .locale("fa")
      .format("jYYYY jMMMM jDD");
  }
};

export const enDateToTime = (dateStr) => {
  if (dateStr) {
    return moment(dateStr, "YYYY-MM-DDTHH:mm:ss").locale("fa").format("HH:mm");
  }
};

export const getDurationStrByMinutes = (duration) => {
  if (duration) {
    const hours = Number(duration) % 60;
    const minutes = Number(duration) - hours * 60;
    const str =
      (hours > 0 && toFaNumber(hours) + " ساعت ") +
      (hours > 0 && minutes > 0 && " و ") +
      (minutes > 0 && toFaNumber(minutes) + " دقیقه");

    return str;
  }
  return null;
};
export const getDurationStr = (duration) => {
  let str = "";

  if (duration) {
    const hours = Number(String(duration)?.split(":")[0]);
    const minutes = Number(String(duration)?.split(":")[1]);
    if (hours > 0) str += toFaNumber(hours) + " ساعت ";
    if (hours > 0 && minutes > 0) str += " و ";
    if (minutes > 0) str += toFaNumber(minutes) + " دقیقه";
  }
  return str;
};

export const toFaNumber = (str) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  for (var i = 0; i < 10; i++) {
    str = String(str)?.replace(/\d/g, (x) => farsiDigits[x]);
  }
  return str;
};

export const toEnNumber = (str) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

  for (var i = 0; i < 10; i++) {
    str = String(str)?.replace(farsiDigits[i], i).replace(arabicDigits[i], i);
  }
  return str;
};

export function numberCommaSplitter(num) {
  return Number(Math.floor(num).toFixed(0))
    .toLocaleString()
    .split(/\s/)
    .join(",");
}
