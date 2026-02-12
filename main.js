
function nameData() {
    let name = document.getElementById("txtName").value;
    document.getElementById("headerText").innerText = "Hello, " + name;
}

let cards = document.querySelectorAll(".card");

cards.forEach((card) =>{

    card.addEventListener("click", function() {

        if (card.classList.contains("cardOne")) {
            card.classList.toggle("red");
        }
        else if (card.classList.contains("cardTwo")) {
            card.classList.toggle("blue");
        }
        else if (card.classList.contains("cardThree")) {
            card.classList.toggle("green");
        }
        else if (card.classList.contains("cardFour")) {
            card.classList.toggle("orange");
        }

    });
});
