function showjoke(response) {
  let jokeElement = document.querySelector("#joke");
  console.log(response.data.answer);

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

function generateJoke(event) {
  event.preventDefault();

  let apiKey = "b88b1f146af7a33abtdd4oddc5070ff6";
  let context =
    "You are a funny AI Assistant that tells short and sweet jokes for children. Do not repeat jokes. Do not include Sure! at the beginning of a joke";
  let prompt = "Please tell me a children's joke.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = "Here comes a joke...";
  axios.get(apiUrl).then(showjoke);
}

let generatorButton = document.querySelector("#generate-button");
generatorButton.addEventListener("click", generateJoke);
