const moment = require('moment');
// let getCurrentDate = function () {
//     var wrapped = moment (new Date());
//     console.log(wrapped.format('dddd') + "," + wrapped.format(' MMMM Do YYYY : h:mm:ss a'));
// }

// to ES6 Syntax
const getCurrentDate = () => moment (new Date());
console.log(getCurrentDate().format('dddd') + "," + getCurrentDate().format(' MMMM Do YYYY : h:mm:ss a'));


