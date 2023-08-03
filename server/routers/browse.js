const api = require('../api')
const express = require('express')
const router = express.Router()

router.get("/latest", (req, res) => {
    const url = `${api.url}/3/discover/movie?year=${new Date().getFullYear()}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api.token}`
      }
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(fulfilled => res.send(fulfilled.results))
      // .then(console.log('sent results'))
      .catch(err => console.error('error:' + err));
})

router.get("/popular", (req, res) => {
  const url = `${api.url}/3/movie/popular`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${api.token}`
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(fulfilled => res.send(fulfilled.results))
    // .then(console.log('sent results'))
    .catch(err => console.error('error:' + err));
})

router.get("/top_rated", (req, res) => {
  const url = `${api.url}/3/movie/top_rated`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${api.token}`
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(fulfilled => res.send(fulfilled.results))
    // .then(console.log('sent results'))
    .catch(err => console.error('error:' + err));
})

router.get("/now_playing", (req, res) => {
  const url = `${api.url}/3/movie/now_playing`;
  const options = {
    method: 'GET', 
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${api.token}`
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(fulfilled => res.send(fulfilled.results))
    .catch(err => console.error('error:' + err));
})

module.exports = router;
