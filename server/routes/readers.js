var express = require('express');
var fs = require('fs');
var datafile = 'server/data/readers.json';
var router = express.Router();

/* GET all books and POST new readers */
router.route('/')
    .get(function(req, res) {
        var data = getReaderData();
        res.send(data);
    })

    .post(function(req, res) {

        var data = getReaderData();
        var nextID = getNextAvailableID(data);

        var newReader = {
            readerID: nextID,
            name: req.body.name,
            weeklyReadingGoal: req.body.weeklyReadingGoal,
            totalMinutesRead: req.body.totalMinutesRead
        };

        data.push(newReader);

        saveReaderData(data);

//        res.set('Content-Type', 'application/json');
        res.status(201).send(newReader);
    });


/* GET, PUT and DELETE individual readers */
router.route('/:id')

    .get(function(req, res) {

        //console.log('Retrieving reader id: ' + req.params.id);

        var data = getReaderData();

        var matchingReaders = data.filter(function(item) {
            return item.readerID == req.params.id;
        });

        if(matchingReaders.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(matchingReaders[0]);
        }
    })

    .delete(function(req, res) {

        var data = getReaderData();

        var pos = data.map(function(e) {
            return e.readerID;
        }).indexOf(parseInt(req.params.id, 10));

        if (pos > -1) {
            data.splice(pos, 1);
        } else {
            res.sendStatus(404);
        }

        saveReaderData(data);
        res.sendStatus(204);

    })

    .put(function(req, res) {

        var data = getReaderData();

        var matchingReaders = data.filter(function(item) {
            return item.readerID == req.params.id;
        });

        if(matchingReaders.length === 0) {
            res.sendStatus(404);
        } else {

            var readerToUpdate = matchingReaders[0];
            readerToUpdate.name = req.body.name;
            readerToUpdate.weeklyReadingGoal = req.body.weeklyReadingGoal;
            readerToUpdate.totalMinutesRead = req.body.totalMinutesRead;

            saveReaderData(data);
            res.sendStatus(204);

        }
    });

function getNextAvailableID(allReaders) {

    var maxID = 0;

    allReaders.forEach(function(element, index, array) {

        if(element.readerID > maxID) {
            maxID = element.readerID;
        }

    });

    return ++maxID;

}

function getReaderData() {
    var data = fs.readFileSync(datafile, 'utf8');
    return JSON.parse(data);
}

function saveReaderData(data) {
    fs.writeFile(datafile, JSON.stringify(data, null, 4), function (err) {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = router;
