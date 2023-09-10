function newDate() {
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

   const date = new Date();
   const currentTime = date.toISOString().slice(11, 19);
   const realDay = daysOfWeek[date.getUTCDay()];
   
   const day = document.querySelector('[data-testid="currentDayOfTheWeek"]');
   const time = document.querySelector('[ data-testid="currentUTCTime"]');
   day.textContent = realDay;
   time.textContent = currentTime;
   setTimeout(newDate, 1000);
}
newDate();



