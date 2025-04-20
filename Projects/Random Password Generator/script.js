const passwordBox = document.getElementById("password");
const strengthText = document.getElementById("strength-text");
const strengthBar = document.getElementById("strength-bar");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

function createPassword() {
  const allChars = uppercase + lowercase + numbers + symbols;
  let password = [
    getRandomChar(uppercase),
    getRandomChar(lowercase),
    getRandomChar(numbers),
    getRandomChar(symbols),
  ];

  for (let i = 4; i < length; i++) {
    password.push(getRandomChar(allChars));
  }

  password = shuffleArray(password).join("");
  passwordBox.value = password;
  evaluateStrength(password);
}

function getRandomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function copyPassword() {
  if (passwordBox.value === "") return;

  navigator.clipboard.writeText(passwordBox.value).then(() => {
    alert("Password copied to clipboard!");
  });
}

function evaluateStrength(password) {
  let strength = 0;
  const regexes = [
    /[a-z]/, // lowercase
    /[A-Z]/, // uppercase
    /[0-9]/, // digits
    /[!@#$%^&*(),.?":{}|<>]/, // symbols
  ];

  regexes.forEach((regex) => {
    if (regex.test(password)) strength++;
  });

  if (strength <= 2) {
    strengthText.innerText = "Weak";
    strengthText.style.color = "#ff4d4d";
    strengthBar.style.width = "33%";
    strengthBar.style.background = "#ff4d4d";
  } else if (strength === 3) {
    strengthText.innerText = "Medium";
    strengthText.style.color = "#ffca28";
    strengthBar.style.width = "66%";
    strengthBar.style.background = "#ffca28";
  } else {
    strengthText.innerText = "Strong";
    strengthText.style.color = "#00e676";
    strengthBar.style.width = "100%";
    strengthBar.style.background = "#00e676";
  }
}
