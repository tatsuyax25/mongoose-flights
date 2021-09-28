const Flight = require('../models/flight');

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flightDocument) {
        if(err){
            console.log(err)
            res.send(err)
        }
        console.log(flightDocument)
        flightDocument.destinations.push(req.body);

        flightDocument.save(function(err){


            res.redirect(`/flights/${req.params.id}`);
        });
    });
}