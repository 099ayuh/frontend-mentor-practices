let btn = document.querySelector(".btn");
let error_message = document.getElementById("error-message");
let inner_wrapper = document.querySelector(".inner-wrapper");
let success_modal = document.querySelector(".success-modal");
const handleSubmit = (event) => {
    event.preventDefault();
    let email = document.getElementById("email").value;

    if (!email) {
        error_message.innerText = "please provide email"
        error_message.style.display = "block";
        setTimeout(() => {
            error_message.innerText = "";
            error_message.style.display = "none";
        }, 2000);
        return;
    }

    let isEmailValid = email.split("@");
    if (isEmailValid.length > 1) {
        // email validated
        document.getElementById("confirmation").innerHTML = `
            A confirmation email has been sent to <b>${email}</b>.
            Please open it and click the button inside to confirm
            your subscription.
        `
        inner_wrapper.style.display = "none";
        success_modal.style.display = "flex";
    } else {
        document.getElementById("email").setAttribute("id", "email-error-message");
        error_message.innerText = "Valid email required"
        error_message.style.display = "block";
        setTimeout(() => {
            document.getElementById("email-error-message").setAttribute("id", "email");
            error_message.innerText = "";
            error_message.style.display = "none";
        }, 2000)
    }
};