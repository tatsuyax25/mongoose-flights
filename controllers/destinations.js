const Flight = require('../models/flight');

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, selectedFlight) {
        
        console.log(selectedFlight)
        selectedFlight.destinations.push(req.body);

        selectedFlight.save(function(err){


            res.redirect(`/flights/${req.params.id}`);
        });
    });
}