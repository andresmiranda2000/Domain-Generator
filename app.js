let pronoun = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];
let end = [".com", ".es", ".net", ".gg"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      for (let a = 0; a < end.length; a++) {
        console.log(`${pronoun[i]}${adjectives[j]}${nouns[k]}${end[i]}`);
      }
    }
  }
}

// EJECUTAR NODE APP.JS EN LA TERMINAL.
