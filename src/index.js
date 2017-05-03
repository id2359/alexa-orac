// testing codeanywhere
var APP_ID = "myappd";
var AlexaSkill = require('./AlexaSkill.js');

var Orac = function() {
  AlexaSkill.call(this, APP_ID);
}

Orac.prototype = Object.create(AlexaSkill.prototype);
Orac.prototype.constructor = Orac;



