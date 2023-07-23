const myText = document.getElementById('my-text');
const result = document.getElementById('result');
const limit = 60;
result.textContent = 0 + "/" + limit;


myText.addEventListener("input", () => {
    let textLenght = myText.value.length;
    result.textContent = textLenght + "/" + limit;

    if (textLenght>limit) {
        myText.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";
    } else {
        myText.style.borderColor = "#b2b2b2";
        result.style.borderColor = "#737373";
    }
});