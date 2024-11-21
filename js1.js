// script.js
console.log("JavaScript loaded successfully!");

function validateForm(event) {
    event.preventDefault();  
    var fullName = document.getElementById("fname");
    var email = document.getElementById("email");
    var address = document.getElementById("adr");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var zip = document.getElementById("zip");
    var cardName = document.getElementById("cname");
    var cardNumber = document.getElementById("ccnum");
    var expMonth = document.getElementById("expmonth");
    var expYear = document.getElementById("expyear");
    var cvv = document.getElementById("cvv");

    // Check if any field is empty
    if (fullName.value === "" || email.value === "" || address.value === "" ||
        city.value === "" || state.value === "" || zip.value === "" ||
        cardName.value === "" || cardNumber.value === "" ||
        expMonth.value === "" || expYear.value === "" || cvv.value === "") {

        alert("Please fill in all the required fields.");
        return;
    }

 
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }


    const zipPattern = /^[0-9]{5}$/;
    if (!zipPattern.test(zip.value)) {
        alert("Please enter a valid zip code (5 digits).");
        return;
    }

 
    const cvvPattern = /^[0-9]{3}$/;
    if (!cvvPattern.test(cvv.value)) {
        alert("Please enter a valid 3-digit CVV.");
        return;
    }

    alert("Form submitted successfully!");
    window.location.href = "index.html";
    localStorage.setItem("fullName", fullName.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("city", city.value);
    localStorage.setItem("state", state.value);
    localStorage.setItem("zip", zip.value);
    localStorage.setItem("cardName", cardName.value);
    localStorage.setItem("cardNumber", cardNumber.value);
    localStorage.setItem("expMonth", expMonth.value);
    localStorage.setItem("expYear", expYear.value);
    localStorage.setItem("cvv", cvv.value);
}

document.getElementById("billingForm").addEventListener("submit", validateForm);
