let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let triviaAmount = document.getElementById("triviaAmount");
  let triviaCategory = document.getElementById("username");
  let triviaDifficulty = document.getElementById("triviaDifficulty");
  let triviaType = document.getElementById("username");

  if (triviaAmount.value == "" ) {
    alert("Ensure you input a value in all fields!");
  } else {
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a Number of Questions: ${triviaAmount.value}, Category of: ${triviaCategory.value} and Difficulty is set to ${triviaDifficulty.value}. Type of answers will be ${triviaType.value}.`
    );

    triviaAmount.value = "";
    triviaCategory.value = "";
    triviaDifficulty.value = "";
    triviaType.value = "";

  }
});

console.log(triviaCategory.value)