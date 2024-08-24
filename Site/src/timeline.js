data = [
  {
    start: new Date(2020, 9, 1),
    end: new Date(2024, 7, 1),
    side: "left",
    innerHTML: "<p style='padding-left:10px'>Bacholer UU</p>",
    position: 1,
    type: "orange",
  },
  {
    start: new Date(2023, 4, 1),
    end: new Date(2023, 8, 1),
    side: "left",
    innerHTML: "<p style='padding-left:10px'>Bartender at Blink</p>",
    position: 2,
    type: "green",
  },
  {
    start: new Date(2022, 7, 1),
    end: new Date(2024, 5, 1),
    side: "right",
    innerHTML: "<p style='padding-left:10px'>RVA Viakunst</p>",
    position: 1,
    type: "blue",
  },
  {
    start: new Date(2022, 8, 1),
    end: new Date(2023, 5, 1),
    side: "right",
    innerHTML: "<p style='padding-left:10px'>Webmaster Viakunst</p>",
    position: 2,
    type: "blue",
  },
  {
    start: new Date(2020, 10, 1),
    end: new Date(2022, 5, 1),
    side: "left",
    innerHTML: "<p style='padding-left:10px'>Web commision Viakunst</p>",
    position: 2,
    type: "blue",
  },
  {
    start: new Date(2019, 3, 1),
    end: new Date(2019, 8, 1),
    side: "right",
    innerHTML:
      "<p style='padding-left:10px'>Night Receptionist Van de Valk</p>",
    position: 1,
    type: "green",
  },
  {
    start: new Date(2018, 2, 1),
    end: new Date(2018, 7, 1),
    side: "left",
    innerHTML: "<p style='padding-left:10px'>Finished Highschool</p>",
    position: 1,
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

  let textcontainer = document.createElement("div");
  let sidecontainer = document.createElement("div");
  let line = document.createElement("div");
  let lineBox = document.createElement("div");
  let pop = document.createElement("div");
  let dot = document.createElement("div");
  let dot2 = document.createElement("div");

  sidecontainer.classList.add("side");
  sidecontainer.classList.add(event.type + "_Side");
  textcontainer.classList.add("timeline__container");
  textcontainer.classList.add(event.type + "_Box");
  line.classList.add("line");
  pop.classList.add("pop");
  dot.classList.add("dot");
  dot2.classList.add("dot");
  lineBox.classList.add("lineBox");
  dot.classList.add(event.type);
  dot2.classList.add(event.type);
  line.classList.add(event.type);

  lineBox.appendChild(dot);
  lineBox.appendChild(line);
  lineBox.appendChild(dot2);

  textcontainer.innerHTML = event.innerHTML;

  if (event.side === "left") {
    pop.appendChild(textcontainer);
    pop.appendChild(sidecontainer);
    eventobj.appendChild(pop);
    eventobj.appendChild(lineBox);
    eventobj.style.right = 50 + event.position * 1.5 + "%";
  } else {
    eventobj.appendChild(lineBox);
    pop.appendChild(sidecontainer);
    pop.appendChild(textcontainer);
    eventobj.appendChild(pop);
    eventobj.style.left = 50 + event.position * 1.5 + "%";
  }

  let DateNow = new Date(Date.now());

  let length = differentMonths(event.end, event.start) * month + 40;
  let top = differentMonths(DateNow, event.end) * month - 20 + topoffset;

  if (lowestTime > event.start) {
    lowestTime = event.start;
  }

  eventobj.style.top = top + "px";
  eventobj.style.height = length + "px";
  eventobj.style.width = 40 - event.position * 1.5 + "%";

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
