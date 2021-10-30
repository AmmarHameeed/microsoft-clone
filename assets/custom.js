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
    $(".theme-dropdown-trigger").on("click", function(){
        $("#theme-menu").show();
    })
    $(".theme-selector.light-theme-custom").on("click", function(){
        $("html").addClass("theme-light");
        $("html").removeClass("theme-dark");
        $("html").removeClass("theme-high-contrast");
    })
    $(".theme-selector.dark-theme-custom").on("click", function(){
        $("html").addClass("theme-dark");
        $("html").removeClass("theme-light");
        $("html").removeClass("theme-high-contrast");
    })
    $(".theme-selector.highC-theme-custom").on("click", function(){
        $("html").addClass("theme-high-contrast");
        $("html").removeClass("theme-dark");
        $("html").removeClass("theme-light");
    })
    $(".dropdown-trigger").on("mouseover", function(){
        console.log("clicked")
        $(".dropdown-menu").hide();
        $(this).siblings().css("display","block");
        
    })
    $(".dropdown-trigger").on("mouseout", function(){
        console.log("clicked")
        $(".dropdown-menu").hide();
        // $(this).siblings().css("display","block");
        
    })

    // $("body").on("click", function(e){
    //     if($("#theme-menu").hasClass("dropdown-closed")){
    //         e.preventDefault();
    //         $("#theme-menu").removeClass("dropdown-closed")
    //         $("#theme-menu").addClass("dropdown-open")
    //         // $("#theme-menu").show();
    //     }
    //     else if(($("#theme-menu").hasClass("dropdown-open"))){
    //         $("#theme-menu").removeClass("dropdown-open")
    //         $("#theme-menu").addClass("dropdown-closed")
    //         $("#theme-menu").hide();
    //     }
    // })
})