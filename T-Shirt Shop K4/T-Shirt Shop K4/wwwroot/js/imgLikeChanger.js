$(document).ready(function(){
    $(".likeBut").click(function(){
        if ($(this).attr('src') !== '/Content/images/like.png') {
            $(this).attr('src', '/Content/images/like.png');
        }
        else
        {
            $(this).attr('src', '/Content/images/like-empty.png');
        }
    });
});