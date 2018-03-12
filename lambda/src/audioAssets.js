'use strict';

let en = {
    card : {
        title: 'Uncle Jon Sings Something',
        subtitle: 'Less bla bla, more la la',
        cardContent: "Fun times with Uncle Jon",
        image: {
            largeImageUrl: 'https://s3.amazonaws.com/uncle-jon-media/alexa-artwork-1200.png',
            smallImageUrl: 'https://s3.amazonaws.com/uncle-jon-media/alexa-artwork-720.png'
        }
    },
    url: 'https://uncle-jon-media.s3-us-west-2.amazonaws.com/2016-your-man.mp3',
    startJingle : 'https://s3.amazonaws.com/alexademo.ninja/maxi80/jingle.m4a'    
};

let de = { // TODO add german translation
    card : {
        title: 'Uncle Jon Sings Something',
        subtitle: 'Less bla bla, more la la',
        cardContent: "Fun times with Uncle Jon",
        image: {
            largeImageUrl: 'https://s3.amazonaws.com/uncle-jon-media/alexa-artwork-1200.png',
            smallImageUrl: 'https://s3.amazonaws.com/uncle-jon-media/alexa-artwork-720.png'
        }
    },
    url: 'https://uncle-jon-media.s3-us-west-2.amazonaws.com/2016-your-man.mp3',
    startJingle : 'https://s3.amazonaws.com/alexademo.ninja/maxi80/jingle.m4a'    
} 

let globalAudioData = {
    'en-US': en,
    'en-GB': en,
    'en-CA': en,
    'en-IN': en,
    'en-AU': en,
    'de-DE': de
};

function audioData(request) {
    let DEFAULT_LOCALE = 'en-US';
    var locale = request === undefined ? DEFAULT_LOCALE : request.locale;
    if (locale === undefined) { 
        locale = DEFAULT_LOCALE
    };
    return globalAudioData[locale];    
}

module.exports = audioData;
