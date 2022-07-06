const btn = document.getElementById("calculate");

btn.addEventListener("click", function() {
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;

    if (height == "" || weight == "") {
        alert("Bitte mache zuerst deine Angaben!");
        return;
    }

    // BMI = weight in KG / (height in m * height in m)

    height = height / 100;

    let BMI = weight / (height * height);

    BMI = BMI.toFixed(2);

    document.querySelector("#result").innerHTML = BMI;

    let status = "";


    if (BMI < 18.5) {
        status = "Untergewichtig";
        document.getElementById("result").style.color = "red";
        document.getElementById("comment").style.color = "red";
    }
    if (BMI >= 18.5 && BMI < 25) {
        status = "Normalgewicht";
        document.getElementById("result").style.color = "green";
        document.getElementById("comment").style.color = "green";
    }
    if (BMI >= 25 && BMI < 30) {
        status = "Übergewicht";
        document.getElementById("result").style.color = "orange";
        document.getElementById("comment").style.color = "orange";
    }
    if (BMI >= 30 && BMI < 35) {
        status = "Adipositas I";
        document.getElementById("result").style.color = "red";
        document.getElementById("comment").style.color = "red";
    }
    if (BMI >= 35 && BMI < 40) {
        status = "Adipositas II";
        document.getElementById("result").style.color = "red";
        document.getElementById("comment").style.color = "red";
    }
    if (BMI > 40) {
        status = "Adipositas III";
        document.getElementById("result").style.color = "red";
        document.getElementById("comment").style.color = "red";
    }
    document.querySelector(
        "#comment"
    ).innerHTML = `<span id="comment">${status}</span>`;
});