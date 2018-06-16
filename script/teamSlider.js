function openTeamItem(event, idName) {
    var i, team_member, selectButton;
    team_member = document.getElementsByClassName("team_member");
    for (i = 0; i < team_member.length; i++) {
        team_member[i].style.display = "none";
    }
    selectButton = document.getElementsByClassName("team_slider_selectButton");
    for (i = 0; i < selectButton.length; i++) {
        selectButton[i].className = selectButton[i].className.replace(" active", "");
    }
    document.getElementById(idName).style.display = "flex";
    event.currentTarget.className += " active";
}

document.getElementById("defaultOpenTeam").click();