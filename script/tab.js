$(document).on("click", ".tab-list li", function(){
    console.log($(this))
    $(this).siblings().css("background-color", "white")
    $(this).siblings().css("color", "black")

    let affichage = $(this).attr("data-target");
    $(".tab-content").hide()

    $(this).css("background-color", "rgb(85, 85, 85)")
    $(this).css("color", "white")
    
    $("#"+affichage).show()
})