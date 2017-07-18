const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

// middleware to use for all requests
router.use(function (req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

var Bear = require('../models/bear')

// on routes that end in /bears
// ----------------------------------------------------
router.route('/bears')
  .post(function (req, res) {
    var bear = new Bear();
    bear.name = req.body.name;
    console.log(bear.name);
    bear.save(function (err) {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.json({ message: 'Bear Created!' });
    });
  }).get(function (req, res) {
    Bear.find(function (err, bears) {
      if (err) {
        res.send(err);
      }
      res.json(bears);
    })
  });

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/bears/:bear_id')
  .get(function (req, res) {
    Bear.findById(req.params.bear_id, function (err, bear) {
      if (err) {
        res.send(err);
      }
      res.json(bear);
    });
  })
  .put(function (req, res) {
    Bear.findById(req.params.bear_id, function (err, bear) {
      if (err) {
        res.send(err);
      }
      bear.name = req.body.name;
      bear.save(function (err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Bear updated!' });
      })
    })
  })
  .delete(function (req, res) {
    Bear.remove({
      _id: req.params.bear_id
    },function (err, bear) {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Borrado de neta!'})
    });
  });

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;