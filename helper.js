function show_content(){
    $('.yield').fadeIn();
    $(".modal-backdrop").remove();
    var windowWidth = $(window).width();
    if(windowWidth <= 1024) {
         $('.panel-collapse').removeClass('in')
    }
    var today_hours = getTodaysHours();
    renderHomeHours('#home_hours_container', '#home_hours_template', today_hours)
}