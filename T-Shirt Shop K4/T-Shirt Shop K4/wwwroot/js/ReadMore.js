$(document).ready(function(){
    $(".read").click(function(){
        $(this).next().toggle();
        $(this).toggle();
        $(this).siblings('.read').toggle();
        if($(this).text()=='read more'){
            $(this).text('read less');
        }
        else{
            $(this).text('read more');
        }
    });
});

