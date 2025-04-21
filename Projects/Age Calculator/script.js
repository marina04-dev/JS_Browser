let userInput = document.getElementById("date");
let result = document.getElementById("result");

// Set maximum selectable date to today
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  if (!userInput.value) {
    result.innerHTML = `<span>Please select your birth date.</span>`;
    return;
  }

  let birthDate = new Date(userInput.value);
  let today = new Date();

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    m3 = m2 + 12 - m1;
    y3--;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    let daysInPrevMonth = getDaysInMonth(y2, m2 - 1);
    d3 = daysInPrevMonth + d2 - d1;
  }

  if (m3 < 0) {
    m3 += 12;
    y3--;
  }

  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function resetCalculator() {
  userInput.value = "";
  result.innerHTML = "";
}
