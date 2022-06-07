function display(id){
    $i = 0;
    $("#"+id).on("click", function (event){
        let menu = $(event.target).children()[1];
        if ($i % 2 == 0){
            $(menu).show();
        } else {
            $(menu).hide();
        }
        $i++;
    });
}

display("drop01");
display("drop02");
