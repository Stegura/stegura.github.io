function openServiceItem(event, serviceName) {
    var i, sb_item, sbm_link;
    sb_item = document.getElementsByClassName("sb_item");
    for (i = 0; i < sb_item.length; i++) {
        sb_item[i].style.display = "none";
    }
    sbm_link = document.getElementsByClassName("sbm_link");
    for (i = 0; i < sbm_link.length; i++) {
        sbm_link[i].className = sbm_link[i].className.replace(" active", "");
    }
    document.getElementById(serviceName).style.display = "block";
    event.currentTarget.className += " active";
}

document.getElementById("defaultOpenService").click();