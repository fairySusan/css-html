var middleIndex = 3;
$('.banner img').click(function() {
    var index = $(this).index();
    $('.banner img').each(function(i) {
       let currLeft =  parseInt($(this).css('left')) - 100 * (index - middleIndex); // 算法
       $(this).css('left', currLeft + 'px');
       if (i<index) {
        $(this).attr('class', 'imgL');
       }else if (i==index){
        $(this).attr('class', 'imgC');
       }else{
        $(this).attr('class', 'imgR');
       }
    });
    middleIndex = index;
});