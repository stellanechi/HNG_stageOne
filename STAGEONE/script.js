const time = document.querySelector('[data-testid="currentUTCTime"]');

console.log(time);

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

time.textContent = daysOfWeek[currentDate.getDay()];
