var addDays = require("date-fns/addDays");
const result = addDays(new Date(2014, 0, 1), 10); // month starts from 0 in syntax. so for jan you should give 0
console.log(result);
