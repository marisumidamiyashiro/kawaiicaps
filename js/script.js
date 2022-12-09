let descriptions ={
    "Bulbasaur":"Who's that Pokemon? It's Bulbasaur! Well, his back anyway.",
    "Pikachu":"Who's that Pokemon? Everyone knows this electifying mouse. But it's actually a keycap.",
    "Maplestory Slime":"This gelatinous monster is adorable and drops apple scented liquid when defeated (but not really.. please keep it alive).",
    "Animal Crossing Fossil":"From the Animal Crossing franchise, this fossil will be the perfect addition to your keyboard, and pairs nicely with the \"Leaf and Bells\".",
    "Animal Crossing Leaf & Bells":"From the Animal Crossing franchise, this shift key will pair nicely with the \"Fossil\".",
    "Badtz Maru":"One of the more notable Sanrio characters, Badtz Maru hopes to one day be \"The boss, of everything\".",
    "Gudetama":"This lazy egg would love nothing more than to lounge on your keyboard all day.",
    "Keroppi":"Hoping to hop his way into your heart and onto your keyboard is KeroKeroKeroppi!",
    "My Melody":"This adorable Sanrio bunny would love to sit on your keyboard as long as you share your almond pound cake with her.",
    "PomPomPurin":"When he's not collecting and hiding your shoes he'd definitely like to stay by your side and share a pudding cup.",
    "Bun Bun":"Bun Bun the bunny will make sure to stay out of your \"hare\".",
    "Cat in a Box":"A mischievous cat that's up to no good. Y'know. Cat stuff.",
    "Coffee Cup":"For all the coffee lovers out there!",
    "Pumpkin":"A cute pumpkin perfect for the Fall season!",
    "Soot Sprite":"An adorable soot sprite inspired by Miyazaki's \"Spirited Away\" and \"My Neighbor Totoro\"."

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
        let clicked = getObject($(this))
        createFeaturedOverlay(clicked)
        })

        $(".product-overlay").click(function() {
            let clicked = getObject($(this))
            createProductOverlay(clicked)
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

    let createFeaturedOverlay = (obj) =>{
        let overlay = $("<div class='overlay fade-in'>");
        let header = $("<div class='overlay-header'>");
        header.append($("<h2>"+obj.title+"</h2>"));
        let close = $("<svg width='30' height='30'><rect id='overlay-top' y='0' width='30' height='3'></rect><rect id='overlay-bottom' y='16' width='30' height='3'></rect></svg>")
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

    let createProductOverlay = (obj) =>{
        let overlay = $("<div class='overlay fade-in'>");
        let header = $("<div class='overlay-header'>");
        header.append($("<h2>"+obj.title+"</h2>"));
        let close = $("<svg width='30' height='30'><rect id='overlay-top' y='0' width='30' height='3'></rect><rect id='overlay-bottom' y='16' width='30' height='3'></rect></svg>")
        close.click(function(){
            $(".overlay").remove()
        })
        header.append(close);
        overlay.append(header)
        let content=$("<div class='overlay-description'>");
        content.append($("<img src='"+obj.pic+"'>"));
        content.append($("<p>"+obj.desc+"</p>"));
        overlay.append(content);
        $(".keycap-product").append(overlay)

    }
