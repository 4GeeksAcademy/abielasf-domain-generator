/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "my", "your", "her"];
  let adjective = ["cute", "ugly", "big", "little"];
  let noun = ["apple", "car", "phone", "home"];
  let domain = [".es", ".io", ".net", ".org", ".com"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adjective.length; x++) {
      for (let j = 0; j < noun.length; j++) {
        for (let y = 0; y < domain.length; y++) {
          let list = document.createElement("li");
          list.className = "text-success";
          list.innerText = `${pronoun[i]}${adjective[x]}${noun[j]}${domain[y]}`;
          document.querySelector("#domains").appendChild(list);
        }
      }
    }
  }
};
