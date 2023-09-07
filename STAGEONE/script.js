const day = document.querySelector('[data-testid="currentDayOfTheWeek"]');

console.log(day);

const currentDate = new Date();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

day.textContent = daysOfWeek[currentDate.getDay()];
