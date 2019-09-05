const Article = require('../../models/Article');

/*

  TODO: GET /articles

*/
exports.getAll = async function(req, res, next) {
  // Your code here..
  try {
    const userFromDB = await Article.find();
    res.json({ articles: userFromDB });
  } catch (err) {
    next(err);
  }
};

/*

  TODO: POST /articles/new

*/
exports.create = async function(req, res, next) {
  // Your code here..
  const newArticle = new Article(req.body);
  await newArticle.save();

  res.status(201).send({ result: 'ok', article: newArticle });
};

/*

  TODO: PUT /articles/:article_id

*/
exports.update = async function(req, res, next) {
  // Your code here..
  try {
    const updateArticle = await Article.findByIdAndUpdate(
      req.params.article_id,
      req.body
    );

    res.json({ result: 'ok', article: updateArticle });
  } catch (err) {
    res.status(400).json({ error: 'invalid article id' });
  }
};

/*

  TODO: DELETE /articles/:article_id

*/
exports.delete = async function(req, res, next) {
  // Your code here..
  try {
    await Article.findByIdAndDelete(req.params.article_id);
    res.json({ result: 'ok' });
  } catch (err) {
    res.status(400).json({ error: 'invalid article id' });
  }
};
