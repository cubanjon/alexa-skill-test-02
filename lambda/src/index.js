'use strict';

var alexa = require('alexa-sdk');
var constants = require('./constants');
var stateHandlers = require('./intentHandlers');
var audioEventHandlers = require('./audioEventHandlers');
var languageStrings = require('./strings');

/*
const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

module.exports.handler = (event, context, callback) => {
    const upperLimit = event.request.intent.slots.UpperLimit.value || 100;
    const number = getRandomInt(0, upperLimit);
    const response = {
      version: '1.0',
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: `Uncle Jon says... your lucky number is ${number}`,
        },
        shouldEndSession: false,
      },
    };
  
    callback(null, response);
  };
*/
exports.handler = (event, context, callback) => {

    if (constants.debug) {
        console.log("\n" + "******************* REQUEST **********************");
        console.log("\n" + JSON.stringify(event, null, 2));

        var origCallback = callback;
        callback = function (error, response) {
            console.log("\n" + "******************* RESPONSE  **********************");
            console.log("\n" + JSON.stringify(response, null, 2));
            return origCallback(error, response);
        }
    }

    var skill = alexa.handler(event, context, callback);

    skill.appId = constants.appId;
    skill.resources = languageStrings;
    skill.debug = constants.debug;
    skill.registerHandlers(
        stateHandlers,
        audioEventHandlers
    );

    skill.execute();
};
