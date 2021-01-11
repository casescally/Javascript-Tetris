document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  //take all the divs in the grid and pass them through the Array.from method, putting them into an array
  let squares = Array.from(document.querySelectorAll(".grid div"));
  const ScoreDisplay = document.querySelector("#score");
  const StartBtn = document.querySelector("#start-button");
  const width = 10;

  console.log(squares);
});
