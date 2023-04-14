let data = [
    {
        title : "Test1",
        date : "Now",
        discription : "<p>preview 1preview preview preview</p>"
    },
    {
        title : "Test2",
        date : "Now",
        discription : "<p>preview2 preview preview preview</p>"
    },
    {
        title : "Test3",
        date : "Now",
        discription : "<p>preview 3preview preview preview</p>"
    },
    {
        title : "Test4",
        date : "Now",
        discription : "<p>preview 4preview preview preview</p>"
    },
    {
        title : "Test5",
        date : "Now",
        discription : "<p>preview 5preview preview preview</p>"
    },
    {
        title : "Test5",
        date : "Now",
        discription : "<p>preview 5preview preview preview</p>"
    },
    {
        title : "Test5",
        date : "Now",
        discription : "<p>preview 5preview preview preview</p>"
    },
    {
        title : "Test5",
        date : "Now",
        discription : "<p>preview 5preview preview preview</p>"
    }
]

createBlog();
blogOnClick(0);

function createBlog()
{
    let sidebar = document.getElementById("blogSidebar");

    for(x = 0; x < data.length; x++){

        let sidebar_element = document.createElement("button");
        let sidebar_text = document.createTextNode(data[x].title);

        let y = x;
        sidebar_element.classList.add("blogSidebar_text");
        sidebar_element.addEventListener("click", function() {blogOnClick(y)},false);
        sidebar_element.appendChild(sidebar_text);

        sidebar.appendChild(sidebar_element);
    }
}

function blogOnClick(n){
    let blogtitles = document.getElementsByClassName("blogSidebar_text");

    for(i = 0; i < blogtitles.length; i++){
        blogtitles[i].classList.remove("active");
    }

    blogtitles[n].classList.add("active");

    let blogtext = document.getElementById("blogtext");
    blogtext.classList.add("blur");    

    blogtext.innerHTML = data[n].discription;

    setTimeout(function() {blogtext.classList.remove("blur");},1000)
}