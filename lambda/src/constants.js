"use strict";

module.exports = Object.freeze({
    
    //App-ID. TODO: set to your own Skill App ID from the developer portal.
    appId : 'amzn1.ask.skill.e3ea1922-0cbe-4e5b-a857-a2b3a0cc0f26',

    // when true, the skill logs additional detail, including the full request received from Alexa
    debug : true,

    // when defined, it tries to read / write DynamoDB to save the last time Jingle was played for that user
    // this allows to avoid to repaet the jingle at each invocation 
    jingle : {
        databaseTable : "uncle_jon_skill_jingle",
        //playOnceEvery : 1 * 60 * 60 * 24 // 24 hours
        playOnceEvery : 1 * 60 * 2 // 2 minutes 
    }

});
