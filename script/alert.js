function txt_alert (array){
    $(array[0]).parent().append("\<div class=\"alert alert-"+array[1]+" col-4 my\"\>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolorem ipsam eum vel iusto praesentium voluptatum in voluptas natus. Nam, dolores consectetur sit dolorum ratione doloremque natus illum asperiores omnis!\<button class=\"close\"\>X\</button\>\</div\>");
}

function print_alert (event){
    var array = [event.target]
    switch (true){
        case $(event.target).hasClass("btn-primary"):
            array.push("primary");
            break;
        case $(event.target).hasClass("btn-secondary"):
            array.push("secondary");
            break;
        case $(event.target).hasClass("btn-success"):
            array.push("success");
            break;
        case $(event.target).hasClass("btn-info"):
            array.push("info");
            break;
        case $(event.target).hasClass("btn-warning"):
            array.push("warning");
            break;
        case $(event.target).hasClass("btn-danger"):
            array.push("danger");
            break;
        case $(event.target).hasClass("btn-light"):
            array.push("light");
            break;
        case $(event.target).hasClass("btn-dark"):
            array.push("dark");
            break;
        default:
            console.log("DEFAULT");
            break;
    }    
    return Array.from(array);
}

$(".reset").on("click", function (){
    $(".alert").remove();
});


$(document).on('click', '.close', function(event) {
    var parent = $(event.target).parents(".alert");
    parent.remove();
});

$(".btn-alert.btn").click(function (event){
    var color = print_alert(event);
    txt_alert(color);
})