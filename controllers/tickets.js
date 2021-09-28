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