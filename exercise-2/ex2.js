var moment = require('moment');
var getCurrentDate = function () {
    var wrapped = moment (new Date());
    console.log(wrapped.format('dddd') + "," + wrapped.format(' MMMM Do YYYY : h:mm:ss a'));
}

getCurrentDate();
