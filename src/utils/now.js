function now() {
  const rawFullDate = new Date();

  const rawParts = {
    month: rawFullDate.getMonth() + 1,
    day: rawFullDate.getDate(),
    hours: rawFullDate.getHours(),
    minutes: rawFullDate.getMinutes(),
    seconds: rawFullDate.getSeconds(),
  };

  const nowParts = {
    YYYY: rawFullDate.getFullYear(),
    MM: leadingZero(rawParts.month),
    DD: leadingZero(rawParts.day),
    hh: leadingZero(rawParts.hours),
    mm: leadingZero(rawParts.minutes),
    ss: leadingZero(rawParts.seconds),
  };

  return {
    date: `${nowParts.YYYY}-${nowParts.MM}-${nowParts.DD}`,
    time: `${nowParts.hh}:${nowParts.mm}:${nowParts.ss}`,
  };
}

function leadingZero(num) {
  return num >= 10 ? num : `0${num}`;
}

export default now;