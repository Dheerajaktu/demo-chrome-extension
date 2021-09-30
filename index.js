// fetch('https://icanhazdadjoke.com/slack')
//     .then(data => {
//         return data.json();
//     })
//     .then(APIData => {
//         const jokeData = APIData.attachments[0].text
//         const element = document.getElementById('jokeSpan');
//         element.innerHTML = jokeData;

//     })


function clearFunction() {
    document.getElementById("inputText").innerHTML = "";
}

$(document).on('click', '#submitBtn', function demo() {
    let userInput = document.getElementById("inputText").value;
    console.log('----here---', userInput);
    let blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "dynamic.txt");
})

