const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://arrow:arrow123@ds121413.mlab.com:21413/jobaya');

module.exports = {mongoose};
