'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = 'dummyid';

var handlers = {
    'HelloWorldIntent': function () {
        this.emit(':tell', 'Hello World!');
    }
 
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
