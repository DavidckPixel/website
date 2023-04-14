let slideimages = ["image/Temp.png", "image/TempCircle.png"]
let slideIndex = 0;
showSlides(slideIndex);

//
let recentPosts = [
  {
    image: "image/Temp.png",
    text: "TEST TEXT 1",
    ref: "undefined"
},
  {
    image: "image/Temp.png",
    text: "TEST TEXT 2",
    ref: "undefined"
},
  {
    image: "image/Temp.png",
    text: "TEST TEXT 3",
    ref: "undefined"
},
  {
    image: "image/Temp.png",
    text: "TEST TEXT 4",
    ref: "undefined"
},
  {
      image: "image/Temp.png",
      text: "TEST TEXT 5",
      ref: "undefined"
  }
]

let recentIndex = 0;
let recentMax = Math.ceil(recentPosts.length / 3) - 1
createRecentPosts();
nextRecent(recentIndex)

function createRecentPosts()
{
  let recentsection = document.getElementById("recent")
  for(i = 0; i < recentPosts.length; i++){
    let data = recentPosts[i];

    let nodepost = document.createElement("section");
    let nodeimg = document.createElement("div");
    let nodetext = document.createElement("div");
    let nodelink = document.createElement("div");

    let img = document.createElement("img");
    img.src = data.image;

    nodeimg.classList.add("recentpost_image");
    nodeimg.appendChild(img);

    let text = document.createTextNode(data.text);
    nodetext.classList.add("recentpost_text");
    nodetext.appendChild(text);

    let link = document.createElement("a");
    link.src = data.ref;

    let linkimg = document.createElement("img");
    linkimg.src = "image/Temp.png";

    link.appendChild(linkimg);
    nodelink.classList.add("recentpost_link");
    nodelink.appendChild(link);

    nodepost.classList.add("recentpost");
    nodepost.classList.add("fade");
    nodepost.appendChild(nodeimg);
    nodepost.appendChild(nodetext);
    nodepost.appendChild(nodelink);

    recentsection.appendChild(nodepost);
  }  
}

function plusRecent(n){
  nextRecent(recentIndex += n);
}

function nextRecent(n){

  let recentHTML = document.getElementsByClassName("recentpost")
  
  for (i = 0; i< recentHTML.length; i++){
    recentHTML[i].style.display = "none"
  }

  if (n > recentMax) {recentIndex = 0}
  if (n < 0) {recentIndex = recentMax}

  let startindex = recentIndex * 3
  let display = 3;

  if (startindex + 3 > recentPosts.length) {display = recentPosts.length - startindex}

  for (i = 0; i < display; i++){
    recentHTML[i + startindex].style.display = "block"
  }
}


var interval = setInterval(function(){
  plusSlides(1);},5000);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementById("slideIMG");
  if (n >= slideimages.length) {slideIndex = 0}    
  if (n < 0) {slideIndex = slideimages.length - 1}
  slides.style.backgroundImage = `url(${slideimages[slideIndex]})`;
}
