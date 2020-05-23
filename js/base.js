$(document).ready(function() {
    $('.open-categories').click(function(){
        $(this).siblings('.navigation__list').slideToggle();
        return false;
    }); 
    
});