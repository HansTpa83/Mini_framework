$.fn.modal = function(attr) {
    if (attr == "show"){
        $(this).show();
    } else {
        $(this).hide()
    }
};

$(".btn-modal").on("click", function(e){
    let id = $(this).attr("data-target")
    console.log(id)
    $("#"+id).modal("show")
});

$(document).on("click", ".popin-dismiss", function(event){
    var parent = $(event.target).parents(".modal");
    $(parent).modal("hide");
});

$(document).on("click", ".modal", function(){
    $(".modal").modal("hide");
});

$(document).on("keydown", function(e){
    if(e.key == "Escape"){
        $(".modal").modal("hide");
    }     
});
