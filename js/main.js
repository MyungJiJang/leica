$(function(){
   var winh=$(window).height();
    $('section').css('height',winh);
    var sec=$('section');
    $(window).scroll(function(){
        var winTop=$(window).scrollTop();
        sec.each(function(){
            var secTop=$(this).offset().top;
            if(secTop>winTop-300){
                $(this).find('.ani').addClass('active');
            }
        });
    });
    
});