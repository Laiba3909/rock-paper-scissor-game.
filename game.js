var javeria = "Rock";
var laiba = "Paper";
if (javeria === laiba) {
    console.log("its a tie");
}
else if ((javeria === "Rock" && laiba === "Paper") ||
    (javeria === "Paper" && laiba === "Scissors") || (javeria === "Scissors" && laiba === "paper")) {
    console.log("Player one wins the match 🤩");
}
else {
    console.log("Player two wins the matchh 🤩");
}
;
