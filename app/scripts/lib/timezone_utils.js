import moment from 'moment';
import 'moment-timezone';

export function formatName(timezone) {
  if (timezone.indexOf('/') == -1) {
    return timezone;
  } else {
    return timezone.split('/')[1].replace('_', ' ');
  }
}

export function formatZoneInfo(timezone, date) {
  let zone         = moment.tz.zone(timezone);
  let offset_hours = zone.offset(date) / 60;
  let abbr         = zone.abbr(date);

  if (offset_hours >= 0) {
    offset_hours = `+${offset_hours}`;
  }

  return `${abbr} UTC${offset_hours}`;
}

export function formatNameWithZoneInfo(timezone) {
  let date = new Date();
  return formatName(timezone) + " (" + formatZoneInfo(timezone, date) + ")";
}
