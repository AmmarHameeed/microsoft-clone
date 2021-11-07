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
    $(".theme-dropdown-trigger").on("click", function(){
        $("#theme-menu").show();
    })
})