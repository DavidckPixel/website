data = { UU: "TEST", UU1: "TEST2", UU2: "TEST3" };

function onEducationClick(button) {
  console.log(button);
  let educationInfo = document.getElementById("education__info");
  educationInfo.classList.add("blur");
  educationInfo.innerHTML = data[button];
  setTimeout(function () {
    educationInfo.classList.remove("blur");
  }, 1000);
}
