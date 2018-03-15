'use strict';

let en = {
    "WELCOME_MSG": "Sure. Oh, Uncle Jon, someone's here for you!",
    "HELP_MSG": "Welcome to {{ skillName }}. You can play, stop, resume listening.  How can I help you ?",
    "UNHANDLED_MSG" : "Sorry, I'm still learning to communicate with Uncle Jon. I didn't understand.",
    "CAN_NOT_SKIP_MSG" : "It would be rude to interrupt Uncle Jon. Let's let him finish.",
    "RESUME_MSG" : "Resuming {{ skillName }}",
    "NOT_POSSIBLE_MSG" : "I'm only a voice in a little box. Maybe call Uncle Jon on the phone to ask for that.",
    "STOP_MSG" : "Ok. Hey, Uncle Jon, they're done listening. I'll take it from here. Alexa is in the building."
};

let de = { // TODO translate to German
    "WELCOME_MSG": "Sure. Oh, Uncle Jon, someone's here for you!",
    "HELP_MSG": "Welcome to {{ skillName }}. You can play, stop, resume listening.  How can I help you ?",
    "UNHANDLED_MSG" : "Sorry, I'm still learning to communicate with Uncle Jon. I didn't understand.",
    "CAN_NOT_SKIP_MSG" : "It would be rude to interrupt Uncle Jon. Let's let him finish.",
    "RESUME_MSG" : "Ok, Uncle Jon {{ skillName }}",
    "NOT_POSSIBLE_MSG" : "I'm only a voice in a little box. Maybe call Uncle Jon on the phone to ask for that.",
    "STOP_MSG" : "Ok. Hey, Uncle Jon, they're done listening. I'll take it from here. Alexa is in the building."
};

module.exports = {
    "en-GB": {
        "translation": en
    },
    "en-US": {
        "translation": en
    },
    "en-IN": {
        "translation": en
    },
    "en-CA": {
        "translation": en
    },
    "en-AU": {
        "translation": en
    },
    "de-DE": {
        "translation": de
    }
};
