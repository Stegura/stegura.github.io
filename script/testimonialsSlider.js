function openTestimonialItem(event, idName) {
    var i, testimonials_block, selectButton;
    testimonials_block = document.getElementsByClassName("testimonials_block_item");
    for (i = 0; i < testimonials_block.length; i++) {
        testimonials_block[i].style.display = "none";
    }
    selectButton = document.getElementsByClassName("testimonials_block_selectButton");
    for (i = 0; i < selectButton.length; i++) {
        selectButton[i].className = selectButton[i].className.replace(" active", "");
    }
    document.getElementById(idName).style.display = "flex";
    event.currentTarget.className += " active";
}

document.getElementById("defaultOpenTestimonial").click();