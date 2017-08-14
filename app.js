const chalk = require('chalk');
const moment = require('moment');

// console.log(moment().get('date'));

var now = moment();

console.log('It is the ' chalk.magenta(now.dayOfYear()) + 'th day of the year.')

console.log('It is ' + chalk.cyan(now.get('second')*now.get('minute')*now.get('hour')) + ' seconds into the day')

if(now.isDST === true){
  console.log('It' + chalk.blue(' is ')+ 'Daylight savings time.');
}
else {
  console.log('It' + chalk.green(' is not ')+ 'Daylight savings time.');
}
if (now.isDST === true) {
  console.log('It' + chalk.blue(' is ')+ 'a leap year.');
}
else{
  console.log('It' + chalk.red(' is not ')+ 'a leap year.');
}
