function logCar(logMsg, callback) {
    process.nextTick(function() {
        callback(logMsg); 
    });
}

var cars = ["Ferreri", "Porsche", "Bugatti"];

/*
i think what's happening here is the for loop reaches the end before the
    callbacks can even run, so all 3 logCar calls are on the same message? idk...
*/
for (var i in cars) {
    var message = "Saw a " + cars[i];
    logCar(message, function() {
        console.log("normal callback: " + message);
    });
}

// idk wtf is going on with this (function(){...})(message) syntax
for (var i in cars) {
    var message = "Saw a " + cars[i];
    (function(msg){
        logCar(msg, function() {
            console.log("closure callback: " + msg);
        });
    })(message);
}
    
