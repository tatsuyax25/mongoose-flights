const Flight = require("../models/flight");

module.exports = {
    new: newFlight,
    create,
    index,
    show,
    delete: deleteFlight
}

function index(req, res){
    
    Flight.find({}).sort('depart').exec(function(err, flights) {
        console.log(new Date());
        res.render('flights/index', {
            flights,
            currentDate: new Date()
        });
    });
}
