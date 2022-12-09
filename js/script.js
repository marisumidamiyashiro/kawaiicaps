let descriptions ={
    "soot sprite":"The cat judges you harshly",
    "look":"The cat looks at what it just knocked off the counter",
    "wtf":"The cat is startled"
}

document.addEventListener('DOMContentLoaded', function () {

    // OVERLAY NAV MENU SHOW/HIDE

    const mymenubutton = document.querySelector('.menu-button');
    const mysitenav = document.querySelector('.site-header .site-nav');

        mymenubutton.onclick = function () {
            if ( mysitenav.getAttribute('data-navstate') === 'open') {
        mysitenav.setAttribute('data-navstate', 'closed');
        } else {
        mysitenav.setAttribute('data-navstate', 'open');
        }
    };

    // OVERLAY NAV HIDE ON NAV ITEM CLICK
    var drawernavlinks = document.querySelectorAll(".drawer nav a");
    var drawerheader = document.querySelector(".drawer .site-nav");
    var j;
    for (j = 0; j < drawernavlinks.length; j++) {
        drawernavlinks[j].onclick = function () {
            drawerheader.setAttribute('data-navstate', 'closed');
        };
    };

    // SCROLL TRIGGERED ANIMATION

    let options = {
        threshold: .25
    }
    const myobserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.setAttribute("data-sectionstate", "active");
            } else {
                entry.target.setAttribute("data-sectionstate", "inactive");
            }
        });
    }, options);

    document.querySelectorAll(".scroll-triggered").forEach((el) => {
        myobserver.observe(el);
    });

});

//waits for page to load

$(document).ready(function(){

    $(".image-overlay").click(function() {
        console.log("test")
        let clicked = getObject($(this))
        createOverlay(clicked)
    })
})

    let getObject = (image) =>{
        let title = image.attr("id")
        let pic = image.attr("src")
        return {
            title:title,
            pic:pic,
            desc:descriptions[title]
            
        }
    }

    let createOverlay = (obj) =>{
        let overlay = $("<div class='overlay'>");
        let header = $("<div class='overlay-header'>");
        header.append($("<h1>"+obj.title+"</h1>"));
        let close = $("<button>X</button>")
        close.click(function(){
            $(".overlay").remove()
        })
        header.append(close);
        overlay.append(header)
        let content=$("<div class='overlay-description'>");
        content.append($("<img src='"+obj.pic+"'>"));
        content.append($("<p>"+obj.desc+"</p>"));
        overlay.append(content);
        $(".featured-product").append(overlay)

    }
