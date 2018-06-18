function openBlogItem(event, idName) {
    var i, blog_item, selectButton;
    blog_item = document.getElementsByClassName("blog_item");
    for (i = 0; i < blog_item.length; i++) {
        blog_item[i].style.display = "none";
    }
    selectButton = document.getElementsByClassName("blog_item_selectButton");
    for (i = 0; i < selectButton.length; i++) {
        selectButton[i].className = selectButton[i].className.replace(" active", "");
    }
    document.getElementById(idName).style.display = "block";
    event.currentTarget.className += " active";
}

document.getElementById("defaultOpenBlogItem").click();