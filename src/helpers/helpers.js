//const iconLink = "http://openweathermap.org/img/wn/10d@2x.png";

export const getIcon = function (iconId, width) {
    return `http://openweathermap.org/img/wn/${iconId}@${width}x.png`;
}

export const getLatLon = function (lat, lon) {
    return [lat, lon];
}

export const dateToHourConverter = function (secs) {
  const date = new Date(secs * 1000);
  const hour = date.getHours();
  const minute = date.getMinutes();

  let readableHour;
  switch(hour) {
    case 13:
        readableHour = 1;
        break;
    case 14:
        readableHour = 2;
        break;
    case 15:
        readableHour = 3;
        break;
    case 16:
        readableHour = 4;
        break;
    case 17:
        readableHour = 5;
        break;
    case 18:
        readableHour = 6
        break;
    case 19:
        readableHour = 7
        break;
    case 20:
        readableHour = 8
        break;
    case 21:
        readableHour = 9;
        break;
    case 22:
        readableHour = 10;
        break;
    case 23:
        readableHour = 11;
        break;
    case 0:
        readableHour = 12
        break;
    default:
        readableHour = hour;
  }
  console.log(hour, minute);
  return `${readableHour}:${minute < 10 ? '0'+ minute : minute} ${hour < 12 ? 'AM' : 'PM'}`
}
export const dateToDayConverter = function (secs) {
  const date = new Date(secs * 1000);
  const day = date.getDay();

  let readableDay;
  switch(day) {
    case 0:
        readableDay = 'Sunday';
        break;
    case 1:
        readableDay = 'Monday';
        break;
    case 2:
        readableDay = "Tuesday";
        break;
    case 3:
        readableDay = 'Wednesday';
        break;
    case 4:
        readableDay = 'Thursday';
        break;
    case 5:
        readableDay = 'Friday'
        break;
    case 6:
        readableDay = "Saturday"
        break;
  }
//   console.log(readableDay);
  return readableDay;
}