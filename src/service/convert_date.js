var moment = require('moment'); 
const convertDateToWeb = (date) => {
    let converted = moment(date).utc().format('DD/MM/YYYY');
    return converted;
}

const convertDateToMySQL = (date) => {
    let arrNum = date.split('/');
    let convertedDate = arrNum[2]+'-'+arrNum[0]+'-'+arrNum[1];
    return convertedDate;
}

module.exports = {
    convertDateToWeb,convertDateToMySQL
};