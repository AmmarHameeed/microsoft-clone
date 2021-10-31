$(document).ready(function(){
    $(".close-upper-banner").on("click", function(){
        $(".tier1-event-banner").hide();
    })
    $(".left-menu-trigger-btn").on("click", function(){
        $(".mobile-menu").css("display","flex");
    })
    $(".modal-close,.modal-background").on("click", function(){
        $(".mobile-menu").hide();
    })
    
    $(".theme-selector.light-theme-custom").on("click", function(){
        $("html").addClass("theme-light");
        $("html").removeClass("theme-dark");
        $("html").removeClass("theme-high-contrast");
        $("#theme-menu").hide();
    })
    $(".theme-selector.dark-theme-custom").on("click", function(){
        $("html").addClass("theme-dark");
        $("html").removeClass("theme-light");
        $("html").removeClass("theme-high-contrast");
        $("#theme-menu").hide();
    })
    $(".theme-selector.highC-theme-custom").on("click", function(){
        $("html").addClass("theme-high-contrast");
        $("html").removeClass("theme-dark");
        $("html").removeClass("theme-light");
        $("#theme-menu").hide();
    })
    $(".unit-expander").on("click", function(){
        $(".module-units").attr("hidden","hidden");
        $(this).siblings().removeAttr("hidden");
        
    })
    $(".expand-btn").on("click", function(){
        var truel = $(this).siblings(".child-list").find("li").is("[hidden]");
        if (truel){
            $(".child-list").find("li").attr("hidden","hidden");
            $(this).siblings(".child-list").find("li").removeAttr("hidden");
        }
        else{
            $(".child-list").find("li").attr("hidden","hidden");
        }
        
    })
    // $(".dropdown-trigger").on("click", function(){
    //     console.log("clicked")
    //     $(".dropdown-menu").hide();
    //     $(this).siblings().css("display","block");
        
    // })
    // $(".dropdown-trigger").on("mouseout", function(){
    //     console.log("clicked")
    //     $(".dropdown-menu").hide();
    //     // $(this).siblings().css("display","block");
        
    // })

    // $("body").on("click", function(e){
    //     var color = $('.mainmenu-dd').css('display');
    //     // if($("#theme-menu").hasClass("dropdown-closed")){
    //     //     e.preventDefault();
    //     //     $("#theme-menu").removeClass("dropdown-closed")
    //     //     $("#theme-menu").addClass("dropdown-open")
    //     //     // $("#theme-menu").show();
    //     // }
    //     // else if(($("#theme-menu").hasClass("dropdown-open"))){
    //     //     console.log("body click")
    //     //     $("#theme-menu").removeClass("dropdown-open")
    //     //     $("#theme-menu").addClass("dropdown-closed")
    //     //     $("#theme-menu").hide();
    //     // }
    //     // if((color == "block")){
    //     //     console.log("dropdown 2 click click")
    //     //     $('.mainmenu-dd').hide();
    //     // }
    //     // else if((color == "none")){
    //     //     $('.mainmenu-dd').show();
    //     // }
    // })
    $(".theme-dropdown-trigger").on("click", function(){
        $("#theme-menu").show();
    })
})