import moment from "moment";

export const getWeekDifference = (date: string) => {
    const today = moment();
    const otherDate = moment(date);
    const diffWeeks = otherDate.diff(today, 'weeks');

    return Math.abs(diffWeeks);
}