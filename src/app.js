/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];
let end = [".com", ".es"];

window.onload = function generateDomain() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let a = 0; a < end.length; a++) {
          let domain = `${pronoun[i]}${adjectives[j]}${nouns[k]}${end[i]}`;

          let paragraph = document.createElement("p");
          paragraph.textContent = domain;
          document.getElementById("domain").appendChild(paragraph);
        }
      }
    }
  }
};