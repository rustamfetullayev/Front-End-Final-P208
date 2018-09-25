$('#slider_business .owl-carousel').owlCarousel({
    loop:true,
    animateIn:'slideInDown',
    animateOut:'slideOutDown',
    margin:20,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})

$('#case .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true
        },
        600:{
            items:1 ,
            nav:false,
            loop:true
        },
        1000:{
            items:5,
            nav:false,
            loop:true
        }
    }
})

$('#company .accordion .tabs').click(function(){
    if(this.style.height=="55px"){
        this.style.height="200px";
        $(this).find("i").removeClass("fa-plus").addClass("fa-minus-square");
    }
    else{
        this.style.height="55px";
        $(this).find("i").removeClass("fa-minus-square").addClass("fa-plus");
    }
});

$("#case .mini_navbar li").click(function(){
    $("#case .mini_navbar li").removeClass("active");
    if($(this).hasClass("active")==false){
        $(this).addClass("active");
    }
});

$('#testimonials .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplaySpeed:2000,
    navSpeed:2000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
        600:{
            items:1 ,
            nav:false,
            loop:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})

$('#news .owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplaySpeed:2000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true
        },
        600:{
            items:1 ,
            nav:false,
            loop:true
        },
        1000:{
            items:5,
            nav:false,
            loop:true
        }
    }
})

$("#search_button").click(function(){
    $(".search_input").toggle();
})

$("#search").click(function(){
    this.style.borderColor="#25baa9";
})

document.body.onscroll=function(){
    if(document.documentElement.scrollTop>=200){
        $("#to_top_button").fadeIn();
        if(window.innerWidth>1036){
            $("#hidden_navbar").fadeIn();
        }
    }
    else{
        $("#hidden_navbar").fadeOut();
        $("#to_top_button").fadeOut();
    }
}

to_top_button.onclick=function(){
    let interval_to_top=setInterval(() => {
        document.documentElement.scrollTop-=50;
        if(document.documentElement.scrollTop<=0){
            clearInterval(interval_to_top);
        }
    }, 15);
}

$("#navbar_main .responsive_navbar .main_list_responsive .main_list_items_res").after().click(function(){
    $(this).find("ul").slideToggle();
})

$("#navbar_main .hidden_navbar_icon").click(function(){
    if(this.parentElement.style.height=="60px"){
        $(this).parent().css("height","360px");
    }
    else{
        $(this).parent().css("height","60px");
    }
})

document.onreadystatechange=function(){
    if(document.readyState=="complete"){
        $("#preloader").fadeOut("slow");
    }
}

$("#recentcasestudy .iframe").click(function(){
    $("#iframe").css("display","block");
})

iframe.onclick=function(){
    this.style.display="none";
}

iframe_close.onclick=function(){
    iframe.style.display="none";
}

$("#hidden_navbar .icon #search_button_hidden").click(function(){
    $("#hidden_navbar .search_input").toggle();
})

$("#hidden_navbar .search_input #search_hidden").click(function(){
    this.style.borderColor="#25baa9";
})