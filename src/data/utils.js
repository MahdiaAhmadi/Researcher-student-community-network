import moment from "moment";

export function toDate(value) {
    if (value !== null && value !== undefined) {
        return moment(value).format('DD/MM/YYYY');
    } else {
        return null;
    }
};