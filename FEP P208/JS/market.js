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

document.onreadystatechange=function(){
    if(document.readyState=="complete"){
        $("#preloader").fadeOut("slow");
    }
}

$("#hidden_navbar .icon #search_button_hidden").click(function(){
    $("#hidden_navbar .search_input").toggle();
})

$("#hidden_navbar .search_input #search_hidden").click(function(){
    this.style.borderColor="#25baa9";
})


$("#main_navbar .icon #search_button").click(function(){
    $("#main_navbar .search_input").toggle();
})

$("#main_navbar .search_input #search").click(function(){
    this.style.borderColor="#25baa9";
})

$(".icons .dropdown_click").click(function(){
    $("header .dropdown").toggle();
})

$("#main_navbar .navbar_responsive .button").click(function(){
    let res_nav=document.querySelector("#main_navbar .navbar_responsive");
    if(res_nav.style.height=="60px"){
        res_nav.style.height="360px";
    }
    else{
        res_nav.style.height="60px";
    }
})

$("#main_navbar .navbar_responsive .main_list_responsive .main_list_items_res").after().click(function(){
    $(this).find("ul").slideToggle();
})

$("#search_area_toggler").click(function(){
    $("#main_navbar .search_area").toggle();
})

$('#overview .accordion .tabs').click(function(){
    if(this.style.height=="55px"){
        this.style.height="155px";
        $(this).find("i").removeClass("fa-plus").addClass("fa-minus-square");
    }
    else{
        this.style.height="55px";
        $(this).find("i").removeClass("fa-minus-square").addClass("fa-plus");
    }
});