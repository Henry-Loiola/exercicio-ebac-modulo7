document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    var fieldA = document.getElementById("fieldA").value;
    var fieldB = document.getElementById("fieldB").value;
    var messageContainer = document.getElementById("messageContainer");

    if (parseInt(fieldB) > parseInt(fieldA)) {
    messageContainer.textContent = "Formulário válido!";
    messageContainer.classList.remove("error");
    messageContainer.classList.add("success");
    } else {
    messageContainer.textContent = "Formulário inválido. O número B deve ser maior que o número A.";
    messageContainer.classList.remove("success");
    messageContainer.classList.add("error");
    }
}