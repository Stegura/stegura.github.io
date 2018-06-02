function openAboutItem(event, aboutName) {
    var i, about_article, dot_link;
    about_article = document.getElementsByClassName("about_article");
    for (i = 0; i < about_article.length; i++) {
        about_article[i].style.display = "none";
    }
    dot_link = document.getElementsByClassName("dot_link");
    for (i = 0; i < dot_link.length; i++) {
        dot_link[i].className = dot_link[i].className.replace(" active", "");
    }
    document.getElementById(aboutName).style.display = "block";
    event.currentTarget.className += " active";
}

document.getElementById("defaultOpenAbout").click();