//https://devicon.dev/
data = [
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    rate: "A",
    name: "Csharp",
    color: "green",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/haskell/haskell-original.svg",
    rate: "B",
    name: "Haskell",
    color: "red",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    rate: "E",
    name: "Typescript",
    color: "green",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    rate: "D",
    name: "HTML5",
    color: "green",
  },
];

/**
 * <div class="slide">
              <img
                class="slide__img"
                src="../image/TempCircle.png"
                height="100"
                width="100"
                alt=""
              />
              <div class="circle">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle class="stroke" cx="50" cy="50" r="47" />
                </svg>
              </div>
            </div>
 */

function generateSlider(data) {
  const slider = document.getElementById("slider");

  const object = document.createElement("div");
  object.classList.add("slide");

  const img = document.createElement("img");
  img.src = data.img;
  img.height = "100";
  img.width = "100";
  img.alt = data.name;
  img.classList.add("slide__img");

  const circlediv = document.createElement("div");
  circlediv.classList.add("circle");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("version", "1.1");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  var svgNS = svg.namespaceURI;

  const circle = document.createElementNS(svgNS, "circle");
  circle.classList.add("stroke");
  circle.setAttribute("cx", "50");
  circle.setAttribute("cy", "50");
  circle.setAttribute("r", "47");
  circle.style.setProperty("stroke", data.color);

  circle.classList.add(data.rate);

  svg.appendChild(circle);
  circlediv.appendChild(svg);
  object.appendChild(img);
  object.appendChild(circlediv);

  slider.appendChild(object);
}

data.forEach((element) => {
  generateSlider(element);
});
data.forEach((element) => {
  generateSlider(element);
});
