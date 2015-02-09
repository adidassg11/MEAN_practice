var events = require('events');

function CarShow() {
    events.EventEmitter.call(this);
    this.seeCar = function(make) {
        this.emit('sawCar', make);
    };
}
CarShow.prototype.__proto__ = events.EventEmitter.prototype;

var show = new CarShow();

function logCar(make) {
    console.log("Saw a " + make);
}

function logColorCar(make, color) {
    console.log("Saw a %s %s", color, make);
}

show.on("sawCar", logCar);
show.on("sawCar", function(make) {
    var colors = ['red', 'green', 'blue', 'black'];
    var color = colors[Math.floor(Math.random()*4)];
    logColorCar(make, color);
    }
);

//run program
show.seeCar("Ferrari");
show.seeCar("POS ford");
show.seeCar("bugatti");
show.seeCar("chevy");
show.seeCar("kia");
