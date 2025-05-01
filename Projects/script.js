var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-Error");
var phoneError = document.getElementById("phone-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[a-zA-Z ]+$/)) {
    nameError.innerHTML = "Only alphabets and spaces are allowed";
    return false;
  }
  nameError.innerHTML = "<i class='fas fa-check circle'></i>";
  return true;
}

function validatePhone() {
  var phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone No. is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone No. must be 10 digits long";
    return false;
  }
  if (!phone.match(/^[0-9]+$/)) {
    phoneError.innerHTML = "Only numbers are allowed";
    return false;
  }
  phoneError.innerHTML = "<i class='fas fa-check circle'></i>";
  return true;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/)) {
    emailError.innerHTML = "Email is invalid";
    return false;
  }
  emailError.innerHTML = "<i class='fas fa-check circle'></i>";
  return true;
}

function validateMessage() {
  var name = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - name.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    return false;
  }
  messageError.innerHTML = "<i class='fas fa-check circle'></i>";
}

function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePhone() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix the errors above to submit the form.";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  } else {
    alert("Form submitted successfully!");
    return true;
  }
}
