var express = require('express');
var fs = require('fs');
var datafile = 'server/data/books.json';
var router = express.Router();

/* GET all books and POST new books */
router.route('/')
    .get(function(req, res) {
        var data = getBookData();
        res.send(data);
    })

    .post(function(req, res) {

        var data = getBookData();
        var nextID = getNextAvailableID(data);

        var newBook = {
            bookID: nextID,
            title: req.body.title,
            author: req.body.author,
            publicationYear: req.body.publicationYear
        };

        data.push(newBook);

        saveBookData(data);

//        res.set('Content-Type', 'application/json');
        res.status(201).send(newBook);
    });


/* GET, PUT and DELETE individual books */
router.route('/:id')

    .get(function(req, res) {

        //console.log('Retrieving book id: ' + req.params.id);

        var data = getBookData();

        var matchingBooks = data.filter(function(item) {
            return item.bookID == req.params.id;
        });

        if(matchingBooks.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(matchingBooks[0]);
        }
    })

    .delete(function(req, res) {

        var data = getBookData();

        var pos = data.map(function(e) {
            return e.bookID;
        }).indexOf(parseInt(req.params.id, 10));

        if (pos > -1) {
            data.splice(pos, 1);
        } else {
            res.sendStatus(404);
        }

        saveBookData(data);
        res.sendStatus(204);

    })

    .put(function(req, res) {

        var data = getBookData();

        var matchingBooks = data.filter(function(item) {
            return item.bookID == req.params.id;
        });

        if(matchingBooks.length === 0) {
            res.sendStatus(404);
        } else {

            var bookToUpdate = matchingBooks[0];
            bookToUpdate.title = req.body.title;
            bookToUpdate.author = req.body.author;
            bookToUpdate.publicationYear = req.body.publicationYear;

            saveBookData(data);
            res.sendStatus(204);

        }
    });

function getNextAvailableID(allBooks) {

    var maxID = 0;

    allBooks.forEach(function(element, index, array) {

        if(element.bookID > maxID) {
            maxID = element.bookID;
        }

    });

    return ++maxID;

}

function getBookData() {
    var data = fs.readFileSync(datafile, 'utf8');
    return JSON.parse(data);
}

function saveBookData(data) {
    fs.writeFile(datafile, JSON.stringify(data, null, 4), function (err) {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = router;
