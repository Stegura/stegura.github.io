$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);

      if (scrollTop >= 80) {
        $('#global-nav').addClass('scrolled-nav');
      } else if (scrollTop < 100) {
        $('#global-nav').removeClass('scrolled-nav');
      }      
      
    }); 
    
  });

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
    function progressBar(skillLevev,counter){
        var no = 0; // Starting Point
        var pointToFill = 4.72;  //Point from where you want to fill the circle
        var diff;   // find the different between current value (no) and trageted value (100)
        function fillCounter(){
            diff = ((no/100) * Math.PI*2*10);
            counter.clearRect(0,0,counter.canvas.width,counter.canvas.height);   // Clear canvas every time when function is call    
            counter.lineWidth = 10;     // size of stroke                   
            counter.strokeStyle = '#047378';    // Stroke Color                    
            counter.beginPath();
            counter.arc(65,65,60,pointToFill,diff/10+pointToFill);    //arc(x,y,radius,start,stop)         
            counter.stroke();   // to fill stroke
                // now add condition
                if(no >= skillLevev){
                    clearTimeout(fill);     //fill is a variable that call the function fillcounter()
                }
                no++;
            }       
            //now call the function
        var fill = setInterval(fillCounter,50);     //call the fillCounter function after every 50MS
    }
    function runProgressBar(serviceName){ 
        var barsArr = document.getElementById(serviceName).getElementsByClassName('sbi_progressBar');
        for(var i= 0; i < barsArr.length; i++){
            progressBar(barsArr[i].textContent, document.getElementById(barsArr[i].id).getContext('2d'));
        }
    }

    document.getElementById(serviceName).style.display = "flex";
    event.currentTarget.className += " active";
    runProgressBar(serviceName);
}

$(window).load(function(){
    var el = $('.works_footer').offset().top;
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);

      if (scrollTop == el) {
        document.getElementById("defaultOpenService").click();
      }       
    }); 
  });
document.getElementById("defaultOpenService").click();

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
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("gallery_album_item");
  if (c == "all") {
    c = "";
    document.getElementById("gallery_album").style.flexDirection="column";
    document.getElementById("gallery_album").style.justifyContent="space-between";} else {
      document.getElementById("gallery_album").style.flexDirection="row";
      document.getElementById("gallery_album").style.justifyContent="center";
    } 
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

// Show filtered elements
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("gallery_menu");
var btns = btnContainer.getElementsByClassName("gallery_menu_button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active_button");
    current[0].className = current[0].className.replace(" active_button", "");
    this.className += " active_button";
  });
}

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

function mapHoverDown(event, mapHoverOff) {
    document.getElementById(mapHoverOff).style.top = "100%";
}

// scroll buttons

$('#scrollDown').click(function(){
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
})

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


$('#moreBtn').click(function(){
    $('#lessBtn').removeClass('hide');
    $('#moreBtn').addClass('hide');
    $('.more_desc').removeClass('hide');
});

$('#lessBtn').click(function(){
    $('#moreBtn').removeClass('hide');
    $('#lessBtn').addClass('hide');
    $('.more_desc').addClass('hide');
});

//modal window

document.getElementById('openWorksModal').onclick = function(){
    document.getElementById('WorksModal').style.display = "block";
};

document.getElementById('closeWorksModal').onclick = function(){
    document.getElementById('WorksModal').style.display = "none";
};

window.onclick = function(event) {
    if (event.target == document.getElementById('WorksModal')) {
        document.getElementById('WorksModal').style.display = "none";
    }
}

document.getElementById('openPortfolioModal').onclick = function(){
    document.getElementById('PortfolioModal').style.display = "block";
};

document.getElementById('closePortfolioModal').onclick = function(){
    document.getElementById('PortfolioModal').style.display = "none";
};

window.onclick = function(event) {
    if (event.target == document.getElementById('PortfolioModal')) {
        document.getElementById('PortfolioModal').style.display = "none";
    }
}

document.getElementById('openTeamModal').onclick = function(){
    document.getElementById('TeamModal').style.display = "block";
};

document.getElementById('closeTeamModal').onclick = function(){
    document.getElementById('TeamModal').style.display = "none";
};

window.onclick = function(event) {
    if (event.target == document.getElementById('TeamModal')) {
        document.getElementById('TeamModal').style.display = "none";
    }
}
