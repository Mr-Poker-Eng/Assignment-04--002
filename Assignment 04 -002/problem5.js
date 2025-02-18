function calculateSleepTime(times) {
  let totalSec = 0;
  for (let i = 0; i < times.length; i++) {
    if(typeof times[i] !== "number"){
        return "Invalid";
    }
    totalSec = times[i] + totalSec;
  }
  let hour = Math.floor(totalSec / 3600);
  let minute = Math.floor((totalSec % 3600) / 60);
  let second = Math.floor((totalSec % 3600) - (minute * 60));
  const time = { hour: hour, minute: minute, second: second };

  return time;
}


