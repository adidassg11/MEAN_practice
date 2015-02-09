var fs = require("fs");

fs.stat("nexttick.js", function(err, stats) {
    if(stats) { 
        console.log("nexttick.js Exists"); 
        console.log("size: %s", stats.size);
    }
});

setImmediate(function() {
    console.log("Immediate Timer 1 executed");
});

setImmediate(function() {
    console.log("immediate timer 2 executed");
});

process.nextTick(function() {
    console.log("next tick 1 executed");
});

process.nextTick(function() {
    console.log("next tick 2 executed");
});
