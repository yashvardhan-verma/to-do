const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.redirect('/add')
})

router.get('/add', (req, res)=>{
    res.render('home');
})

router.get('/all', (req, res)=>{
    res.send('<h1> All</h1>')
})

module.exports = router;