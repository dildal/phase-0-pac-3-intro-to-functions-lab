function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    // console.log(shout(string));
    return;
}

function logWhisper(string){
    // console.log(whisper(string));
    return;
}

function sayHiToHeadphonedRoommate(string){
    if(string === "Let's have dinner together!"){
        return "I would love to!";
    } else if(string === string.toUpperCase()){
        return "YES INDEED!";
    } else if(string === string.toLowerCase()){
        return "I can't hear you!";
    }
}