let sumСolums = document.querySelectorAll(`[data-id='revenue-value']`);
let sum = document.getElementById(`summ`);
let total = 0;

for (let i = 0; i < sumСolums.length; i++) {
  let tdVelue = sumСolums[i].innerHTML;
  if (tdVelue.indexOf(`B`) !== -1) {
    total += parseInt(tdVelue) * 1e9;
  } else if (tdVelue.indexOf(`M`) !== -1) {
    total += parseInt(tdVelue) * 1e6;
  } else {
    total += parseInt(tdVelue);
  }
}

sum.innerHTML = `TOTAL: ${total}`;
