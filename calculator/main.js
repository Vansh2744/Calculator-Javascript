const screen = document.querySelector("#screen");
const btn = document.querySelectorAll("button");
for (let button of btn) {
  button.addEventListener("click", (e) => {
    const btnValue = e.target.innerText;
    if (btnValue === "C") {
      screen.value = "";
    } else if (btnValue === "=") {
      try {
        screen.value = eval(screen.value);
      } catch (e) {
        screen.value = "Invalid Input";
      }
    } else if (button.className == "backspace") {
      screen.value = screen.value.substring(0, screen.value.length - 1);
    } else if (btnValue === "x") {
      screen.value += "*";
    } else {
      screen.value += btnValue;
    }
  });
}
