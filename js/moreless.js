$(function(){
    $('.repair').each(function(){
        $(this).append('.button');
        var textelement = $(this).find('.text');
        var wys = textelement.height();
        textelement.css('height', '71px');
        $(this).find('.button').live('click', function(){
            textelement.animate({height: wys}, 1000);
            $(this).attr('class', 'readless');
            $(this).text('Read less');
        });
        $(this).find('.readless').live('click', function(){
            textelement.animate({height: '250 px'}, 1000);
            $(this).attr('class', 'button');
            $(this).text('Read more');
        });
    });
});
