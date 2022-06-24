const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const inputDate = "05 Dec 2022"

function countDown() {
  const birthdayDate = new Date(inputDate);
  const date2 = new Date();
  const diffTime = (birthdayDate - date2) / 1000;

  // console.log(diffTime);
  const diffDays = Math.floor(diffTime / 3600 / 24);
  const diffHours = Math.floor(diffTime / 3600) % 24;
  const diffMinutes = Math.floor(diffTime / 60) % 60;
  const diffSeconds = Math.floor(diffTime) % 60;
  console.log(diffDays + " days");
  console.log(diffHours + " hours");
  console.log(diffMinutes + " minutes");
  console.log(diffSeconds + " seconds");

  days.innerHTML = diffDays;
  hours.innerHTML = diffHours;
  minutes.innerHTML = diffMinutes;
  seconds.innerHTML = diffSeconds;
}

countDown();

setInterval(countDown, 1000);
