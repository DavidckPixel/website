let languege = "NL";

function switchLang() {
  let pdfviewer = document.getElementById("pdf__viewer");
  let button = document.getElementById("langButton");
  let download = document.getElementById("download");

  if (languege == "NL") {
    pdfviewer.src = "../file/cv_nl.pdf";
    languege = "EN";
    download.href = "../file/cv_nl.pdf";
    button.src = "../icons/NL.svg";
  } else {
    pdfviewer.src = "../file/cv_nl.pdf";
    languege = "NL";
    download.href = "../file/cv_nl.pdf";
    button.src = "../icons/EN.svg";
  }
}
