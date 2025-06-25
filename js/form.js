// Buggy form.js
document.querySelector("form").addEventListener("submit", function(event) {
    var name = document.querySelector("[name='name']").value;
    var email = document.querySelector("[name='email']").value;

    if (email.indexOf('@') === -1) {
        alert("Invalid email");
        event.preventDefault();
    }
    else if (name === "") {
        alert("Name is required");
        event.preventDefault();
    }
    else {
      alert("Form submitted!");
    }

});
