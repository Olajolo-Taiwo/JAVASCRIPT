/*JavaScript Date Objects
JavaScript Date Objects let us work with dates:

Fri Jul 18 2025 09:01:16 GMT+0100 (West Africa Standard Time)

     
Examples
const d = new Date();
const d = new Date("2022-03-25");
Note
Date objects are static. The "clock" is not "running".

The computer clock is ticking, date objects are not.

JavaScript Date Output
By default, JavaScript will use the browser's time zone and display a date as a full text string:

Fri Jul 18 2025 09:01:16 GMT+0100 (West Africa Standard Time)

You will learn much more about how to display dates, later in this tutorial.

Creating Date Objects
Date objects are created with the new Date() constructor.

There are 9 ways to create a new date object:

new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
JavaScript new Date()
new Date() creates a date object with the current date and time:

Example
const d = new Date();
new Date(date string)
new Date(date string) creates a date object from a date string:

Examples
const d = new Date("October 13, 2014 11:13:00");
const d = new Date("2022-03-25");
Date string formats are described in the next chapter.

new Date(year, month, ...)
new Date(year, month, ...) creates a date object with a specified date and time.

7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

Example
const d = new Date(2018, 11, 24, 10, 33, 30, 0);
Note
JavaScript counts months from 0 to 11:

January = 0.

December = 11.

Specifying a month higher than 11, will not result in an error but add the overflow to the next year:

Specifying:

const d = new Date(2018, 15, 24, 10, 33, 30);
Is the same as:

const d = new Date(2019, 3, 24, 10, 33, 30);
Specifying a day higher than max, will not result in an error but add the overflow to the next month:

Specifying:

const d = new Date(2018, 5, 35, 10, 33, 30);
Is the same as:

const d = new Date(2018, 6, 5, 10, 33, 30);
Using 6, 4, 3, or 2 Numbers
6 numbers specify year, month, day, hour, minute, second:

Example
const d = new Date(2018, 11, 24, 10, 33, 30);
5 numbers specify year, month, day, hour, and minute:

Example
const d = new Date(2018, 11, 24, 10, 33);
4 numbers specify year, month, day, and hour:

Example
const d = new Date(2018, 11, 24, 10);
3 numbers specify year, month, and day:

Example
const d = new Date(2018, 11, 24);
2 numbers specify year and month:

Example
const d = new Date(2018, 11);
You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

Example
const d = new Date(2018);
Previous Century
One and two digit years will be interpreted as 19xx:

Example
const d = new Date(99, 11, 24);
Example
const d = new Date(9, 11, 24);
JavaScript Stores Dates as Milliseconds
JavaScript stores dates as number of milliseconds since January 01, 1970.

Zero time is January 01, 1970 00:00:00 UTC.

One day (24 hours) is 86 400 000 milliseconds.

Now the time is: 1752825676353 milliseconds past January 01, 1970

new Date(milliseconds)
new Date(milliseconds) creates a new date object as milliseconds plus zero time:

Examples
01 January 1970 plus 100 000 000 000 milliseconds is:

const d = new Date(100000000000);
January 01 1970 minus 100 000 000 000 milliseconds is:

const d = new Date(-100000000000);
January 01 1970 plus 24 hours is:

const d = new Date(24 * 60 * 60 * 1000);
// or
const d = new Date(86400000);
01 January 1970 plus 0 milliseconds is:

const d = new Date(0);
ADVERTISEMENT

Date Methods
When a date object is created, a number of methods allow you to operate on it.

Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects, using either local time or UTC (universal, or GMT) time.

Date methods and time zones are covered in the next chapters.

Displaying Dates
JavaScript will (by default) output dates using the toString() method. This is a string representation of the date, including the time zone. The format is specified in the ECMAScript specification:

Example
Fri Jul 18 2025 09:01:16 GMT+0100 (West Africa Standard Time)
When you display a date object in HTML, it is automatically converted to a string, with the toString() method.

Example
const d = new Date();
d.toString();
The toDateString() method converts a date to a more readable format:

Example
const d = new Date();
d.toDateString();
The toUTCString() method converts a date to a string using the UTC standard:

Example
const d = new Date();
d.toUTCString();
The toISOString() method converts a date to a string using the ISO standard:

Example
const d = new Date();
d.toISOString();
*/



/*
JavaScript Date Formats
JavaScript Date Input
There are generally 3 types of JavaScript date input formats:

Type	Example
ISO Date	"2015-03-25" (The International Standard)
Short Date	"03/25/2015"
Long Date	"Mar 25 2015" or "25 Mar 2015"
The ISO format follows a strict standard in JavaScript.

The other formats are not so well defined and might be browser specific.

JavaScript Date Output
Independent of input format, JavaScript will (by default) output dates in full text string format:

Fri Jul 18 2025 09:01:54 GMT+0100 (West Africa Standard Time)
JavaScript ISO Dates
ISO 8601 is the international standard for the representation of dates and times.

The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:

Example (Complete date)
const d = new Date("2015-03-25");
The computed date will be relative to your time zone.
Depending on your time zone, the result above will vary between March 24 and March 25.

ISO Dates (Year and Month)
ISO dates can be written without specifying the day (YYYY-MM):

Example
const d = new Date("2015-03");
Time zones will vary the result above between February 28 and March 01.

ISO Dates (Only Year)
ISO dates can be written without month and day (YYYY):

Example
const d = new Date("2015");
Time zones will vary the result above between December 31 2014 and January 01 2015.

ISO Dates (Date-Time)
ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):

Example
const d = new Date("2015-03-25T12:00:00Z");
Date and time is separated with a capital T.

UTC time is defined with a capital letter Z.

If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:

Example
const d = new Date("2015-03-25T12:00:00-06:30");
UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).

Omitting T or Z in a date-time string can give different results in different browsers.

Time Zones
When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.

When getting a date, without specifying the time zone, the result is converted to the browser's time zone.

In other words: If a date/time is created in GMT (Greenwich Mean Time), the date/time will be converted to CDT (Central US Daylight Time) if a user browses from central US.

JavaScript Short Dates.
Short dates are written with an "MM/DD/YYYY" syntax like this:

Example
const d = new Date("03/25/2015");
WARNINGS !
In some browsers, months or days with no leading zeroes may produce an error:

const d = new Date("2015-3-25");
The behavior of "YYYY/MM/DD" is undefined.
Some browsers will try to guess the format. Some will return NaN.

const d = new Date("2015/03/25");
The behavior of  "DD-MM-YYYY" is also undefined.
Some browsers will try to guess the format. Some will return NaN.

const d = new Date("25-03-2015");
JavaScript Long Dates.
Long dates are most often written with a "MMM DD YYYY" syntax like this:

Example
const d = new Date("Mar 25 2015");
Month and day can be in any order:

Example
const d = new Date("25 Mar 2015");
And, month can be written in full (January), or abbreviated (Jan):

Example
const d = new Date("January 25 2015");
Example
const d = new Date("Jan 25 2015");
Commas are ignored. Names are case insensitive:

Example
const d = new Date("JANUARY, 25, 2015");
Date Input - Parsing Dates
If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

Date.parse() returns the number of milliseconds between the date and January 1, 1970:

Example
let msec = Date.parse("March 21, 2012");
You can then use the number of milliseconds to convert it to a date object:

Example
let msec = Date.parse("March 21, 2012");
const d = new Date(msec);
*/



/*
The new Date() Constructor
In JavaScript, date objects are created with new Date().

new Date() returns a date object with the current date and time.

Get the Current Time
const date = new Date();
Date Get Methods
Method	Description
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
Note 1
The get methods above return Local time.

Universal time (UTC) is documented at the bottom of this page.

Note 2
The get methods return information from existing date objects.

In a date object, the time is static. The "clock" is not "running".

The time in a date object is NOT the same as current time.

The getFullYear() Method
The getFullYear() method returns the year of a date as a four digit number:

Examples
const d = new Date("2021-03-25");
d.getFullYear();
const d = new Date();
d.getFullYear();
Warning !
Old JavaScript code might use the non-standard method getYear().

getYear() is supposed to return a 2-digit year.

getYear() is deprecated. Do not use it!

The getMonth() Method
The getMonth() method returns the month of a date as a number (0-11).

Note
In JavaScript, January is month number 0, February is number 1, ...

Finally, December is month number 11.

Examples
const d = new Date("2021-03-25");
d.getMonth();
const d = new Date();
d.getMonth();
Note
You can use an array of names to return the month as a name:

Examples
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date("2021-03-25");
let month = months[d.getMonth()];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
The getDate() Method
The getDate() method returns the day of a date as a number (1-31):

Examples
const d = new Date("2021-03-25");
d.getDate();
const d = new Date();
d.getDate();
The getHours() Method
The getHours() method returns the hours of a date as a number (0-23):

Examples
const d = new Date("2021-03-25");
d.getHours();
const d = new Date();
d.getHours();
The getMinutes() Method
The getMinutes() method returns the minutes of a date as a number (0-59):

Examples
const d = new Date("2021-03-25");
d.getMinutes();
const d = new Date();
d.getMinutes();
The getSeconds() Method
The getSeconds() method returns the seconds of a date as a number (0-59):

Examples
const d = new Date("2021-03-25");
d.getSeconds();
const d = new Date();
d.getSeconds();
The getMilliseconds() Method
The getMilliseconds() method returns the milliseconds of a date as a number (0-999):

Examples
const d = new Date("2021-03-25");
d.getMilliseconds();
const d = new Date();
d.getMilliseconds();
The getDay() Method
The getDay() method returns the weekday of a date as a number (0-6).

Note
In JavaScript, the first day of the week (day 0) is Sunday.

Some countries in the world consider the first day of the week to be Monday.

Examples
const d = new Date("2021-03-25");
d.getDay();
const d = new Date();
d.getDay();
Note
You can use an array of names, and getDay() to return weekday as a name:

Examples
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date("2021-03-25");
let day = days[d.getDay()];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];
The getTime() Method
The getTime() method returns the number of milliseconds since January 1, 1970:

Examples
const d = new Date("1970-01-01");
d.getTime();
const d = new Date("2021-03-25");
d.getTime();
const d = new Date();
d.getTime();
The Date.now() Method
Date.now() returns the number of milliseconds since January 1, 1970.

Examples
let ms = Date.now();
Calculate the number of years since 1970/01/01:

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);
Date.now() is a static method of the Date object.

You cannot use it on a date object like myDate.now().

The syntax is always Date.now().

UTC Date Get Methods
Method	Same As	Description
getUTCDate()	getDate()	Returns the UTC date
getUTCFullYear()	getFullYear()	Returns the UTC year
getUTCMonth()	getMonth()	Returns the UTC month
getUTCDay()	getDay()	Returns the UTC day
getUTCHours()	getHours()	Returns the UTC hour
getUTCMinutes()	getMinutes()	Returns the UTC minutes
getUTCSeconds()	getSeconds()	Returns the UTC seconds
getUTCMilliseconds()	getMilliseconds()	Returns the UTC milliseconds
UTC methods use UTC time (Coordinated Universal Time).

UTC time is the same as GMT (Greenwich Mean Time).

The difference between Local time and UTC time can be up to 24 hours.


The getTimezoneOffset() Method
The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:

Example
let diff = d.getTimezoneOffset();
*/



/*

JavaScript Set Date Methods
Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

Set Date Methods
Set Date methods are used for setting a part of a date:

Method	Description
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (yyyy)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
The setFullYear() Method
The setFullYear() method sets the year of a date object. In this example to 2020:

Example
const d = new Date("January 01, 2025");
d.setFullYear(2020);
The setFullYear() method can optionally set month and day:

Example
const d = new Date("January 01, 2025");
d.setFullYear(2020, 11, 3);
The setMonth() Method
The setMonth() method sets the month of a date object (0-11):

Example
const d = new Date("January 01, 2025");
d.setMonth(11);
The setDate() Method
The setDate() method sets the day of a date object (1-31):

Example
const d = new Date("January 01, 2025");
d.setDate(15);
The setDate() method can also be used to add days to a date:

Example
const d = new Date("January 01, 2025");
d.setDate(d.getDate() + 50);
Note
If adding days shifts the month or year, the changes are handled automatically by the Date object.

The setHours() Method
The setHours() method sets the hours of a date object (0-23):

Example
const d = new Date("January 01, 2025");
d.setHours(22);
The setHours() method can also be used to set minutes and seconds.

Example
const d = new Date("January 01, 2025");
d.setHours(22, 10, 20);
The setMinutes() Method
The setMinutes() method sets the minutes of a date object (0-59):

Example
const d = new Date("January 01, 2025");
d.setMinutes(30);
The setSeconds() Method
The setSeconds() method sets the seconds of a date object (0-59):

Example
const d = new Date("January 01, 2025");
d.setSeconds(30);
Compare Dates
Dates can easily be compared.

The following example compares today's date with January 14, 2100:

Example
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
Note
JavaScript counts months from 0 to 11. January is 0. December is 11.

 */
