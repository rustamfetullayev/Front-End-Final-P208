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

$("#check .form input").click(function(){
    $("#check .form input").removeClass("active");
    $("#check .form textarea").removeClass("active");
    if($(this).hasClass("active")==false){
        $(this).addClass("active");
    }
})

$("#check .form textarea").click(function(){
    $("#check .form input").removeClass("active");
    if($(this).hasClass("active")==false){
        $(this).addClass("active");
    }
})

let email=document.getElementById("email");
let text=document.getElementById("text");
let message=document.getElementById("message");

text.addEventListener("click",function(){
    if(email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1){
        email.style.borderBottomColor="red";
    }
    else{
        email.style.borderBottomColor="#f3f2f6";
    }
})

text.addEventListener("click",function(){
    if(email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1){
        email.style.borderBottomColor="red";
    }
    else{
        email.style.borderBottomColor="#f3f2f6";
    }
})