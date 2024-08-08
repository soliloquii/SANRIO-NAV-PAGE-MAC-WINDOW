/* time date text */

const dateMonth = document.getElementById('date-month'),
    dateDay = document.getElementById('date-day'),
    dateYear = document.getElementById('date-year'),
    textHour = document.getElementById('text-hour'),
    textMinutes = document.getElementById('text-minutes')


const clockText = () => {
    //new date objects
    let date = new Date()

    var foo = document.createTextNode("\u00A0");

    //get time/dates
    let month = date.getMonth(),
        day = date.getDay(),
        year = date.getFullYear(),
        hh = date.getHours(),
        mm = date.getMinutes()

    //get days of week + months, first day of week = Sun
    let daysWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursaday', 'friday', 'saturday']
    let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

    //corresponding dates
    dateMonth.innerHTML = `${months[month]}`
    dateDay.innerHTML = `${day},`
    dateYear.innerHTML = year

    textHour.innerHTML = `${hh}:`

    // if minutes are < 10, add 0 (01, 02, 03, ... 09)
    if (mm<10){mm = `0${mm}`}

    textMinutes.innerHTML =mm
}

setInterval(clockText)