function getCurrentDateTime() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  let currentHour = currentDate.getHours().toString();
  if (currentHour.length === 1) currentHour = `0${currentHour}`;
  let currentMin = currentDate.getMinutes().toString();
  if (currentMin.length === 1) currentMin = `0${currentMin}`;
  const currentDateTime = `${currentYear}-${currentMonth}-${currentDay}T${currentHour}:${currentMin}:00`;
  return currentDateTime;
}

module.exports = getCurrentDateTime;