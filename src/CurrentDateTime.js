function getCurrentDateTime() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const currentHour = currentDate.getHours();
  const currentMin = currentDate.getMinutes();
  const currentDateTime = `${currentYear}-${currentMonth}-${currentDay}T${currentHour}:${currentMin}:00`;
  return currentDateTime;
}

module.exports = getCurrentDateTime;