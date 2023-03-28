$(function(){
    $(".menu_btn").click(function(){
        $(".menu_content").css("left", "0")
        $(this).css("display", "none")
    })
    $(".menu .menu_content ").click(function(){
        $(".menu_content").css("left", "600px")
        $(".menu_btn").css("display", "block")
    })
})