// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:


function areYouPlayingBanjo(name) {
    // Implement me
    return name[0] == 'r' || name[0] == 'R'? name + ' plays banjo' : name + ' does not play banjo' ;
};

let areU = (name) => {return name[0] == 'r' || name[0] == 'R'? name + ' plays banjo' : name + ' does not play banjo'}

areYouPlayingBanjo('John');
areYouPlayingBanjo('Ronn');

//  Best practices 

function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }

