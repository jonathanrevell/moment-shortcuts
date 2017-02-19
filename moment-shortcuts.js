import Moment from "moment";
import "moment-range";

export var YEAR = (new Moment()).year();

export function Timestamp( date = new Date() ) {
    return Moment(date).format("x");
}

export function TimestampInt( date = new Date() ) {
    return Number.parseInt( Timestamp(date) );
}

// ISO8601
export function TimestampISO( date = new Date() ) {
    return Moment(date).toISOString();
}

export function DateInputFormat( date = new Date() ) {
    return Moment(date).format("YYYY-MM-DD");
}

export function FriendlyDate( date = new Date() ) {
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

export function RangeForCalendarYear( year = YEAR ) {
    var start = new Moment({ year, month: 1, day: 1 });
    var end = start.clone().endOf("year");

    return Moment.range( start, end );
}

export function Range12MonthsPrevious( startDate = new Date() ) {
    var end = new Moment(startDate);
    var start = end.clone().subtract(11, "month");

    return Moment.range( start, end );
}

export function RangeXMonthsPrevious( startDate = new Date(), months = 1 ) {
    var end = new Moment(startDate);
    var start = end.clone().subtract(months, "month");

    return Moment.range( start, end );
}