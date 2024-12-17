const searchButton = document.querySelector('.btn.btn-outline-success');
const searchInput = document.getElementById('word');

searchButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input value
    const inputValue = searchInput.value;
    console.log('Search input value:', inputValue);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const meanings = document.getElementById('meaning');

            // Initialize an array to hold all meanings
            let allMeanings = [];

            // Iterate through meanings and definitions to gather all the definitions (meanings)
            data[0].meanings.forEach(meaning => {
                meaning.definitions.forEach(definition => {
                    allMeanings.push(definition.definition);  // Add each definition to the array
                });
            });

            // Limit the meanings to the first 3 and join them together
            const limitedMeanings = allMeanings.slice(0, 3);
            const meaningsText = limitedMeanings.join(', ');

            // Display the combined meanings in the HTML element
            meanings.innerText = `Meanings: ${meaningsText}`;

            const audioElement = document.getElementById('audio');

            // Get the audio link from the data
            const audioLink = data[0].phonetics[0].audio;

            // Set the audio source and load it
            if (audioLink) {
                audioElement.src = audioLink;
                audioElement.load();
            }
allExamplesallExamples
            // Gather all the examples from the data
            const aallExamplesllExamples = [];
            data[0].meanings.forEach(meaning => {
                meaning.definitions.forEach(definition => {
                allExamplesinition.example) {
                        allExamples.push(definition.example);  // Collect each example
                    }
                });
            });

            // Access the HTML element with id "example"
            const examplesElement = document.getElementById('example');
            examplesElement.innerText = "Examples:\n";

            // Limit the examplesexamples to the first 3 and append each
            const limitedExamples = allExamples.slice(0, 3);
            limitedExamples.forEach(example => {
                examplesElement.innerText += `- ${example}\n`;  // Append each example on a new line
            });

        });

    const UrWord = document.getElementsByClassName("card-title")[0];
    UrWord.innerText = `Word: ${inputValue}`;
}); 

// Async function ttoo handle translation
// async function translateText() {
//     try {
//         const res = await fetch("https://libretranslate.com/translate", {
//             method: "POST",
//             body: JSON.stringify({
//                 q: "Hello!",
//                 source: "en",
//                 target: "es"
//             }),
//             headers: { "Content-Type": "application/json" }
//         });
        
//         const trtranslattranslattrtranslattranslatawaitawait res.json();
//         console.log(translationData);
//     }translattranslattranslattranslat
//         consoletrtranslattranslatawaitconsoletrtranslattranslatawaitoror:", error);
//     }
// }

// // Call the translate function
// translatexamplestranslatexamples

translat





;





translattranslattranslattranslattranslattranslattranslattranslattranslattranslattranslattranslat