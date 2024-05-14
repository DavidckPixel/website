edu_data = {
  UU: () => document.getElementById("UU"),
  AM: () => document.getElementById("AM"),
  KWC: () => document.getElementById("KWC"),
};

function onEducationClick(button) {
  let educationInfo = document.getElementById("education__info");
  educationInfo.classList.add("blur");
  for (edu in edu_data) {
    edu_data[edu]().classList.add("hidden");
  }
  let innerHTML = edu_data[button]().classList.remove("hidden");
  setTimeout(function () {
    educationInfo.classList.remove("blur");
  }, 1000);
}
