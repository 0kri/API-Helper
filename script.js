let loginForm = document.getElementById("loginForm");

let apiData = {
  url: "https://opentdb.com/api.php?",
  amount: 1,
  category: "any",
  diffuculty: "any",
  type: "any"
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let triviaAmount = document.getElementById("triviaAmount");
  let triviaCategory = document.getElementById("triviaCategory");
  let triviaDifficulty = document.getElementById("triviaDifficulty");
  let triviaType = document.getElementById("triviaType");

  if (triviaAmount.value == "" ) {
    alert("Ensure you input a value in all fields!");
  } else {
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a Number of Questions: ${triviaAmount.value}, Category of: ${triviaCategory.value} and Difficulty is set to ${triviaDifficulty.value}.Type of answers will be ${triviaType.value}.`
    );

    fetchData().then( response => console.log(response))
  }
});

async function fetchData() {
  // const { url, amount, category, diffuculty, type } = apiData
  
  apiData.amount = triviaAmount.value
  apiData.category = triviaCategory.value
  apiData.diffuculty = triviaDifficulty.value
  apiData.type = triviaType.value

  const { url, amount, category, diffuculty, type } = apiData

  let quizUrl = `${url}amount=${amount}&category=${category}&difficulty=${diffuculty}&type=${type}`
  const response = await fetch(quizUrl)
  return response.json()
  console.log(quizUrl)

}

