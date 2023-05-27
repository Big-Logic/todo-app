export const generateDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const fullDate = date.getDate();

  const day = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();

  let monthStr = '';
  let dayStr = '';

  switch (month) {
    case 0:
      monthStr = 'Jan.';
      break;
    case 1:
      monthStr = 'Feb.';
      break;
    case 2:
      monthStr = 'Mar.';
      break;
    case 3:
      monthStr = 'Apr.';
      break;
    case 4:
      monthStr = 'May';
      break;
    case 5:
      monthStr = 'Jun.';
      break;
    case 6:
      monthStr = 'Jul.';
      break;
    case 7:
      monthStr = 'Aug.';
      break;
    case 8:
      monthStr = 'Sept.';
      break;
    case 9:
      monthStr = 'Oct.';
      break;
    case 10:
      monthStr = 'Nov.';
      break;
    case 11:
      monthStr = 'Dec.';
      break;
  }

  switch (day) {
    case 0:
      dayStr = 'Sun.';
      break;
    case 1:
      dayStr = 'Mon.';
      break;
    case 2:
      dayStr = 'Tue.';
      break;
    case 3:
      dayStr = 'Wed.';
      break;
    case 4:
      dayStr = 'Thu.';
      break;
    case 5:
      dayStr = 'Fri.';
      break;
    case 6:
      dayStr = 'Sat.';
      break;
  }

  return `${dayStr} ${hour}:${minute} ${monthStr} ${fullDate}, ${year}`;
};
