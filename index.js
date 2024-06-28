document
  .getElementById("quizForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let score = 0;

    // Answers to the quiz questions
    const answers = ["a", "a", "b", "a"];

    // Check answers
    for (let i = 1; i <= answers.length; i++) {
      let selectedAnswer = document.querySelector(`input[name=q${i}]:checked`);
      if (selectedAnswer) {
        if (selectedAnswer.value === answers[i - 1]) {
          score++;
        }
      }
    }

    // Determine which video to show based on score
    let videoId =
      score >= 3
        ? "ZFWC4SiZBao&ab_channel=LanaDelReyVEVO"
        : "2IH8tNQAzSs&ab_channel=LilWayneVEVO";

    // Redirect to the appropriate video
    window.location.href = `https://www.youtube.com/watch?v=${videoId}`;
  });
