const mongoose = require('mongoose');

/*

  MongoDB schema definition using mongoose
  https://mongoosejs.com/docs/guide.html

 */
const articleSchema = new mongoose.Schema({
  // TODO: Fill in article schema
});

module.exports = mongoose.model('Article', articleSchema);
