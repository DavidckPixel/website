data = [
  {
    start: new Date(2022, 0, 1),
    end: new Date(2024, 3, 1),
    side: "left",
    size: "big",
    innerHTML: "testtestetst",
  },
  {
    start: new Date(2022, 2, 1),
    end: new Date(2023, 3, 1),
    side: "right",
    size: "big",
    innerHTML: "testtestetst",
  },
];

//1 month = 50px
const month = 10;

data.forEach((d) => generateObj(d));

function generateObj(event) {
  let timeline = document.getElementById("timeline");

  let eventobj = document.createElement("div");
  eventobj.classList.add("timeline__entry");
  eventobj.classList.add("boxed");
  eventobj.classList.add(event.side);
  eventobj.classList.add(event.size);

  eventobj.innerHTML = event.innerHTML;

  let DateNow = new Date(Date.now());

  let length = differentMonths(event.end, event.start) * month;
  let top = differentMonths(DateNow, event.end) * month;

  eventobj.style.top = top + "px";
  eventobj.style.height = length + "px";

  timeline.appendChild(eventobj);

  console.log(length);
  console.log(top);
}

function differentMonths(d2, d1) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}
