var express = require('express');
var router = new express.Router();
var jsonData = require('./data.json');

// console.log("here", jsonData)

router.get('/project', function (req, res) {
    const sortedData = jsonData.data1.sort(function(a, b) {
        return a.id - b.id
    })
    res.send(sortedData);
});

router.get('/project/:id', function (req, res) {
    const idF = req.params.id;
    const found = jsonData.data1.filter(function(item) {
        return item.id === idF
      })
    res.send(found);
})

module.exports = router;