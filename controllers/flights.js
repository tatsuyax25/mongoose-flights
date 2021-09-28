const Flight = require("../models/flight");
const Ticket = require("../models/ticket")

module.exports = {
    new: newFlight,
    create,
    index,
    show,
    delete: deleteFlight
}

function index(req, res) {

    Flight.find({}, function (err, flightArray) {
        res.render('flights/index', {
            title: flights,
            flightArray
        });
    });
}

function show(req, res) {
    Flight.find({}, function(err, selectedFlight) {
        console.log(selectedFlight)
        res.render('flight/show', {
            title: "Details",
            selectedFlight
        });
    });
}

function create(req, res) {
    Flight.create(req.body, function(err, addedFlight) {
        if(err) {
            console.log(err);
            res.redirect('/flights/new');
        }
        console.log(addedFlight);
        res.redirect('/flights');
    });
}

function newFlight(req, res) {
    
    res.render('flights/new', {
        title: "New Flight"
    });
}

function deleteFlight(req, res) {
    Flight.findByIdAndRemove(req.params.id, function(err, flight){
        res.redirect('/')
    });
}