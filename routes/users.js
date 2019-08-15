const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const USERS = [
  {
    id: 1,
    name: 'ken huh'
  },
  {
    id: 2,
    name: 'wan huh'
  },
  {
    id: 3,
    name: 'vaco'
  }
];

// TODO: Change to your own secret string value and set up as an environment variable
const YOUR_SECRET_KEY = 'YOUR_SECRET_KEY';

// DO NOT MODIFY
exports.YOUR_SECRET_KEY = YOUR_SECRET_KEY;
exports.USERS = USERS;

/*

  TODO: GET /users

  - set up body-parser middleware for JSON response
  - https://github.com/expressjs/body-parser#bodyparserjsonoptions

*/
router.get('/', (req, res, next) => {
  // Your code here..
});

/*

  TODO: POST /users

*/
router.post('/', (req, res, next) => {
  // Your code here..
});

/*

  TODO: PUT /users/:user_id

*/
router.put('/:user_id', (req, res, next) => {
  // Your code here..
});

/*

  TODO: DELETE /users/:user_id

*/
router.delete('/:user_id', (req, res, next) => {
  // Your code here..
});

/*

  TODO: GET /users/:user_id/token

*/
router.get('/:user_id/token', (req, res, next) => {
  // Your code here..
});

/*

  TODO: GET /users/:user_id/secret

*/
router.get('/:user_id/secret', (req, res, next) => {
  // Your code here..
});

exports.router = router;
