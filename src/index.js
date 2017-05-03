// testing codeanywhere
var APP_ID = "myappd";
var AlexaSkill = require('./AlexaSkill.js');

var Orac = function() {
  AlexaSkill.call(this, APP_ID);
}

Orac.prototype = Object.create(AlexaSkill.prototype);
Orac.prototype.constructor = Orac;

Orac.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {  
  console.log("Orac onSessionStarted requestId: " + sessionStartedRequest.requestId  + ", sessionId: " + session.sessionId);  
  + session.sessionId; 
};  



