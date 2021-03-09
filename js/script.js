$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    let typed = new Typed(".typing", {
        strings: ["Web Developer", "Software Developer", "Android Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    let typed2 = new Typed(".typing-2", {
        strings: ["Web Developer", "Software Developer", "Android Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    //toggle
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

