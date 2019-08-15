const express = require('express');

const index = require('./routes/index');
const articles = require('./routes/articles');
const users = require('./routes/users').router;

const app = express();

app.use('/', index);
app.use('/articles', articles);
app.use('/users', users);

// DO NOT MODIFY: error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
