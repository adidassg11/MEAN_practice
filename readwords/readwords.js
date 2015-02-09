var censor = require("censorify");

console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad, bad, and mad text."));
console.log(censor.censor("Some gloomy weather before censoring"));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some gloomy weather after censoring"));


