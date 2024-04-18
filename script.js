document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const tableBody = document.querySelector("#myTable tbody");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const address = document.getElementById("address").value;
        const pincode = document.getElementById("pincode").value;
        const gender = document.querySelector("input[name='gender']:checked").value;
        const foodInputs = document.querySelectorAll("input[name^='food']:checked");
        const foods = Array.from(foodInputs).map(input => input.value); 
        const state = document.getElementById("state").value;
        const country = document.getElementById("country").value;

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${foods.join(", ")}</td>
            <td>${state}</td>
            <td>${country}</td>
        `;

        tableBody.appendChild(newRow);

        form.reset();
    });
});