var Moment = require("moment");
require("moment-range");

var YEAR = (new Moment()).year();
module.exports.YEAR = YEAR;


function Timestamp( date ) {
    if(!date) {
        date = new Date();
    }
    return Moment(date).format("x");
}
module.exports.Timestamp = Timestamp;


function TimestampInt( date ) {
    if(!date) {
        date = new Date();
    }
    return Number.parseInt( Timestamp(date) );
}
module.exports.TimestampInt = TimestampInt;


// ISO8601
function TimestampISO( date ) {
    if(!date) {
        date = new Date();
    }    
    return Moment(date).toISOString();
}
module.exports.TimestampISO = TimestampISO;


function DateInputFormat( date ) {
    if(!date) {
        date = new Date();
    }    
    return Moment(date).format("YYYY-MM-DD");
}
module.exports.DateInputFormat = DateInputFormat;


function FriendlyDate( date ) {
    if(!date) {
        date = new Date();
    }    
    var moment = Moment(date);
    var momentNow = Moment();
    if(momentNow.diff(moment, "minutes") <= 2) {
        return "just now";
    } else if(moment.isSame(momentNow, "day")) {
        return moment.from(momentNow);

    } else if (moment.isSame(momentNow, "week")) {
        return moment.format("ddd");

    } else if (moment.isSame(momentNow, "year")) {
        return moment.format("MMM D");
    } else {
        return moment.format("MMM D, YYYY");
    }
}
module.exports.FriendlyDate = FriendlyDate;


function RangeForCalendarYear( year ) {
    if(!year) {
        year = YEAR;
    }
    var start = new Moment({ year: year, month: 1, day: 1 });
    var end = start.clone().endOf("year");

    return Moment.range( start, end );
}
module.exports.RangeForCalendarYear = RangeForCalendarYear;


function Range12MonthsPrevious( startDate ) {
    if(!startDate) {
        startDate = new Date();
    }
    var end = new Moment(startDate);
    var start = end.clone().subtract(11, "month");

    return Moment.range( start, end );
}
module.exports.Range12MonthsPrevious = Range12MonthsPrevious;


function RangeXMonthsPrevious( startDate, months ) {
    if(!startDate) {
        startDate = new Date();
    }
    if(!months) {
        months = 1;
    }        
    var end = new Moment(startDate);
    var start = end.clone().subtract(months, "month");

    return Moment.range( start, end );
}
module.exports.RangeXMonthsPrevious = RangeXMonthsPrevious;

