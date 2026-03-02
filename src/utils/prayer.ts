/**
 * Prayer time calculation based on the PrayTimes algorithm
 * http://praytimes.org/calculation
 * Method: Muslim World League (used by UAE AWQAF)
 */

const DEG = Math.PI / 180;
const RAD = 180 / Math.PI;

function fixAngle(a: number) {
  return fix(a, 360);
}

function fix(a: number, b: number) {
  a = a - b * Math.floor(a / b);
  return a < 0 ? a + b : a;
}

function sin(d: number) { return Math.sin(d * DEG); }
function cos(d: number) { return Math.cos(d * DEG); }
function tan(d: number) { return Math.tan(d * DEG); }
function asin(d: number) { return Math.asin(d) * RAD; }
function atan2(y: number, x: number) { return Math.atan2(y, x) * RAD; }

// Sun position
function sunPosition(jd: number) {
  const D = jd - 2451545.0;
  const g = fixAngle(357.529 + 0.98560028 * D);
  const q = fixAngle(280.459 + 0.98564736 * D);
  const L = fixAngle(q + 1.915 * sin(g) + 0.020 * sin(2 * g));
  const e = 23.439 - 0.00000036 * D;
  const RA = atan2(cos(e) * sin(L), cos(L)) / 15;
  const eqt = q / 15 - fixAngle(RA);
  const decl = asin(sin(e) * sin(L));
  return { decl, eqt };
}

// Julian date
function julian(year: number, month: number, day: number): number {
  if (month <= 2) { year -= 1; month += 12; }
  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
}

// Compute prayer angle
function computePrayerAngle(lat: number, decl: number, angle: number): number {
  return asin(-sin(angle) / (cos(lat) * cos(decl)) - tan(lat) * tan(decl));
}

export interface PrayerTimesResult {
  fajr: Date;
  sunrise: Date;
  dhuhr: Date;
  asr: Date;
  maghrib: Date;
  isha: Date;
}

export function calcPrayerTimes(lat: number, lng: number, date: Date): PrayerTimesResult {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const jd = julian(year, month, day) - lng / (15 * 24);
  const { decl, eqt } = sunPosition(jd);

  const timezone = 4; // UAE is UTC+4
  const noon = 12 - eqt - lng / 15 + timezone;

  // Muslim World League angles
  const fajrAngle = 18;    // Fajr: 18°
  const ishaAngle = 17;    // Isha: 17°
  const asrFactor = 1;     // Standard (Shafi'i)

  // Sun hour angles
  const fajrHour = computePrayerAngle(lat, decl, fajrAngle);
  const sunriseHour = computePrayerAngle(lat, decl, 0.833);
  const asrAngle = asin(1 / (asrFactor + tan(Math.abs(lat - decl))));
  const asrHour = asin(-sin(asrAngle) / (cos(lat) * cos(decl)) - tan(lat) * tan(decl));

  const fajrTime = noon - fajrHour / 15;
  const sunriseTime = noon - sunriseHour / 15;
  const dhuhrTime = noon + 0.0;
  const asrTime = noon + asrHour / 15;
  const maghribTime = noon + sunriseHour / 15; // sunset
  const ishaTime = noon + computePrayerAngle(lat, decl, ishaAngle) / 15;

  function hoursToDate(hours: number): Date {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    // hours are in UTC+4 local time, convert to UTC for Date
    const totalMinutes = Math.round(hours * 60);
    const h = Math.floor(totalMinutes / 60) % 24;
    const m = totalMinutes % 60;
    d.setHours(h, m, 0, 0);
    return d;
  }

  return {
    fajr: hoursToDate(fajrTime),
    sunrise: hoursToDate(sunriseTime),
    dhuhr: hoursToDate(dhuhrTime),
    asr: hoursToDate(asrTime),
    maghrib: hoursToDate(maghribTime),
    isha: hoursToDate(ishaTime),
  };
}

export function formatTimeAr(date: Date): string {
  const h = date.getHours();
  const m = date.getMinutes().toString().padStart(2, '0');
  const h12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
  const ampm = h >= 12 ? 'م' : 'ص';
  return `${h12}:${m} ${ampm}`;
}

// Names of prayers in Arabic
export const prayerNames: Record<string, string> = {
  fajr: 'الفجر',
  sunrise: 'الشروق',
  dhuhr: 'الظهر',
  asr: 'العصر',
  maghrib: 'المغرب',
  isha: 'العشاء',
};

// For month schedule generation (server-side, Astro)
export function getMonthSchedule(lat: number, lng: number, year: number, month: number) {
  const daysInMonth = new Date(year, month, 0).getDate();
  const schedule = [];
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month - 1, day);
    const times = calcPrayerTimes(lat, lng, date);
    schedule.push({
      day,
      date: `${day}/${month}/${year}`,
      fajr: formatTimeAr(times.fajr),
      sunrise: formatTimeAr(times.sunrise),
      dhuhr: formatTimeAr(times.dhuhr),
      asr: formatTimeAr(times.asr),
      maghrib: formatTimeAr(times.maghrib),
      isha: formatTimeAr(times.isha),
    });
  }
  return schedule;
}

// Arabic month names
export const arabicMonths = [
  '', 'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
];
