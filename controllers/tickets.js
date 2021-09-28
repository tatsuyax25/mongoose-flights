const Ticket = require('../flights/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket
}

function newTicket(req, res) {
    Ticket.find({}, function (err, tickets) {
        console.log(tickets)
        res.render('tickets/new', {
            flightId: req.params.id
        })
    })
}

function create(req, res) {
    flightId = req.params.id;
    req.body.flight = flightId;
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${flightId}`);
    });
}