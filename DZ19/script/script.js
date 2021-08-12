function clockDate() {
  let newDate = new Date();

  let time = [newDate.getHours(), newDate.getMinutes(), newDate.getSeconds()];

  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let monthOfYear = [
    "January",
    "February",
    "March",
    "April ",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = newDate.getDay();
  let months = newDate.getMonth();
  let year = newDate.getUTCFullYear();

  if (time[0] < 10) {
    time[0] = "0" + time[0];
  }

  if (time[1] < 10) {
    time[1] = "0" + time[1];
  }

  if (time[2] < 10) {
    time[2] = "0" + time[2];
  }

  let currentTime = [time[0], time[1], time[2]].join(":");
  let clock = document.getElementById("clock");
  let dateCurrent = document.getElementById("date");

  clock.innerHTML = currentTime;
  dateCurrent.innerHTML = [daysOfWeek[days], monthOfYear[months], year].join(
    " : "
  );

  setTimeout("clockDate()", 1000);
}
