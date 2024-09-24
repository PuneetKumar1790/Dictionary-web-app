const searchButton = document.querySelector('.btn.btn-outline-success');
const searchInput = document.getElementById('word');

searchButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input value
    const inputValue = searchInput.value;
    console.log('Search input value:', inputValue);
    fetch(https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue})
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            // const meaning = document.getElementById('meaning')
            // meaning.innerText = Meaning:${data[0].meanings[0].definitions[0].definition}
            const meanings = document.getElementById('meaning');

            // Initialize an array to hold all meanings
            let allMeanings = [];

            // Iterate through meanings and definitions to gather all the definitions (meanings)
            data[0].meanings.forEach(meaning => {
                meaning.definitions.forEach(definition => {
                    allMeanings.push(definition.definition);  // Add each definition to the array
                });
            });

            // Join all meanings together, separated by commas
            // const meaningsText = allMeanings.join(', ');
            const limitedMeanings = allMeanings.slice(0, 3);  // Slice the array to get only the first 3 meanings

            // Join the meanings together, separated by commas
            const meaningsText = limitedMeanings.join(', ');

            // Display the combined meanings in the HTML element
            meanings.innerText = Meanings: ${meaningsText};
            // Display the combined meanings in the HTML element
            meanings.innerText = Meanings: ${meaningsText};
            const audioElement = document.getElementById('audio');

            // Get the audio link from the data
            const audioLink = data[0].phonetics[0].audio;

            // Set the audio source and load it
            if (audioLink) {
                audioElement.src = audioLink;
                audioElement.load();
            }
            // Get all examples

            const allExamples = [];

            // Gather all the examples from the data
            data[0].meanings.forEach(meaning => {
                meaning.definitions.forEach(definition => {
                    if (definition.example) {
                        allExamples.push(definition.example);  // Collect each example
                    }
                });
            });

            // Access the HTML element with id "example"
            const examplesElement = document.getElementById('example');

            // Clear any previous content and set the header "Examples:"
            examplesElement.innerText = "Examples:\n";

            // Limit the examples to the first 3
            const limitedExamples = allExamples.slice(0, 3);

            // Append each example to the element, without overwriting the previous ones
            limitedExamples.forEach(example => {
                examplesElement.innerText += - ${example}\n;  // Append each example on a new line
            });


        })
    const UrWord = document.getElementsByClassName("card-title")[0]
    UrWord.innerText = Word:${inputValue}

});