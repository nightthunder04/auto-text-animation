// const containerEl = document.querySelector(".container")

// const careers = ["student","Race Driver","Mechanic", "Army officer","Business"];

// let careerIndex = 0;

// let characterIndex();

// updateText();


// function updateText (){
//     characterIndex++;
//     containerEl.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
    

//     if (characterIndex ==careers[careerIndex].length){
//         careerIndex++
//         characterIndex = 0
//     }
//     setTimeout(updateText,400);

// };



//  new set of line 

const containerEl = document.querySelector(".container");

const careers = ["student", "Race Driver", "Mechanic", "Army officer", "Business Man"];

let careerIndex = 0;
let characterIndex = 0;

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

    if (characterIndex == careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;

        // Reset careerIndex to 0 if it exceeds the length of careers array
        if (careerIndex === careers.length) {
            careerIndex = 0;
        }
    }

    setTimeout(updateText, 400);
}

updateText();

