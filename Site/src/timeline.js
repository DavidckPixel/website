data = [
  {
    start: new Date(2022, 0, 1),
    end: new Date(2024, 3, 1),
    side: "left",
    size: "big",
    innerHTML: "<p style='padding-left:10px;color:blue'>testtestetst</p>",
    position: 0,
    type: "blue",
  },
  {
    start: new Date(2019, 9, 1),
    end: new Date(2024, 7, 1),
    side: "right",
    size: "small",
    innerHTML: "Bch. UU",
    position: 0,
    type: "orange",
  },

  {
    start: new Date(2020, 2, 1),
    end: new Date(2020, 10, 1),
    side: "right",
    size: "small",
    innerHTML: "testtestetst",
    position: 0.25,
    type: "orange",
  },
];

const topoffset = 40;
//1 month = 50px
const month = 10;
let lowestTime = new Date(Date.now());

data.forEach((d) => generateObj(d));
setHeight();
generateTimeLine();

function generateObj(event) {
  let timeline = document.getElementById("timeline");

  let eventobj = document.createElement("div");
  eventobj.classList.add("timeline__entry");
  eventobj.classList.add(event.side);
  eventobj.classList.add(event.size);

  let textcontainer = document.createElement("div");
  let sidecontainer = document.createElement("div");

  sidecontainer.classList.add("side");
  sidecontainer.classList.add(event.type + "_Side");
  textcontainer.classList.add("timeline__container");
  textcontainer.classList.add(event.type + "_Box");

  textcontainer.innerHTML = event.innerHTML;

  if (event.side === "left") {
    eventobj.appendChild(textcontainer);
    eventobj.appendChild(sidecontainer);
    eventobj.style.right = 50 + event.position * 40 + "%";
  } else {
    eventobj.appendChild(sidecontainer);
    eventobj.appendChild(textcontainer);
    eventobj.style.left = 50 + event.position * 40 + "%";
  }

  let DateNow = new Date(Date.now());

  let length = differentMonths(event.end, event.start) * month + 40;
  let top = differentMonths(DateNow, event.end) * month - 20 + topoffset;

  if (lowestTime > event.start) {
    lowestTime = event.start;
  }

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

function setHeight() {
  let timeline = document.getElementById("timeline");
  let years = document.getElementById("years");
  let date = new Date(Date.now());

  let h = month * differentMonths(date, lowestTime) + 150;
  timeline.style.height = h + "px";
  years.style.height = h + "px";
}

function generateYear(year) {
  let DateNow = new Date(Date.now());
  yearWidth = month * 12;
  yearTop =
    differentMonths(DateNow, new Date(year, 12, 12)) * month + topoffset;
  console.log(yearTop);

  let yearobj = document.createElement("div");
  yearobj.classList.add("year__block");
  yearobj.style.height = yearWidth + "px";
  yearobj.style.top = yearTop + "px";

  let yeartext = document.createElement("div");
  yeartext.classList.add("year");
  yeartext.innerHTML = year;

  let year__line = document.createElement("hr");
  year__line.classList.add("year__line");

  yearobj.appendChild(year__line);
  yearobj.appendChild(yeartext);

  for (i = 0; i < 11; i++) {
    let monthobj = document.createElement("hr");
    monthobj.classList.add("month_line");
    yearobj.appendChild(monthobj);
  }

  let years = document.getElementById("years");

  years.appendChild(yearobj);
}

function generatePartialyear(date) {
  const m = date.getMonth();
  yearWidth = month * m;
  yearTop = topoffset - 10;
  console.log(yearTop);

  let yearobj = document.createElement("div");
  yearobj.classList.add("year__block");
  yearobj.style.height = yearWidth + "px";
  yearobj.style.top = yearTop + "px";

  let year__line = document.createElement("hr");
  year__line.classList.add("year__line");
  let yeartext = document.createElement("div");
  yeartext.classList.add("year");
  yeartext.innerHTML = "Now";

  yearobj.appendChild(year__line);
  yearobj.appendChild(yeartext);

  for (i = 0; i < m; i++) {
    let monthobj = document.createElement("hr");
    monthobj.classList.add("month_line");
    yearobj.appendChild(monthobj);
  }

  let years = document.getElementById("years");
  console.log(years);

  years.appendChild(yearobj);
}

function generateTimeLine() {
  now = new Date(Date.now());
  year = now.getFullYear();
  last = lowestTime.getFullYear();

  generatePartialyear(now);
  year--;
  while (year >= last) {
    generateYear(year);
    year--;
  }
}
