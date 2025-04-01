"use strict";

let secretnum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check-btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess-input").value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number ";
  }
  // Check if guess is correct
  else if (guess === secretnum) {
    document.querySelector(".message").textContent = "🎉 Correct Number ";
    document.querySelector(".question-mark").textContent = secretnum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".question-mark").style.width = "20rem";

    // ✅ Highscore logic (inside correct guess condition)
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretnum) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretnum ? "📈 Too High " : "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😅 You Lost ";
      document.querySelector(".score").textContent = 0;
    }
  }
  // // Check if guess is too high
  // else if (guess > secretnum) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too High ";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😅 You Lost ";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  // // Check if guess is too low
  // else if (guess < secretnum) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too Low ";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😅 You Lost ";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again-btn").addEventListener("click", function () {
  score = 20; // Reset score
  secretnum = Math.trunc(Math.random() * 20) + 1; // Generate new number

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score; // Reset score display
  document.querySelector(".question-mark").textContent = "?";
  document.querySelector(".guess-input").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".question-mark").style.width = "15rem";
});
