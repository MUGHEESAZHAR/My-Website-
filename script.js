function sendMail() {

    let investmentRadio = document.querySelector('input[name="investment"]:checked');
    let investmentValue = investmentRadio ? investmentRadio.value : "not selected";

    let parms = {
        name: document.getElementsByClassName("name-input")[0].value,
        mobile: document.getElementsByClassName("mobile-input")[0].value,
        email: document.getElementsByClassName("email-input")[0].value,
        account: document.getElementsByClassName("account-input")[0].value,
        emailaddress: document.getElementsByClassName("emailaddress-input")[0].value,
        message: document.getElementsByClassName("message-input")[0].value,
        investment: investmentValue
    };

    emailjs.send("service_wi9pusf", "template_q5wg8mm", parms)
        .then(function(response) {
            alert("Email sent successfully!");
        })
        .catch(function(error) {
            alert("Email failed to send: " + JSON.stringify(error));
        });
}
