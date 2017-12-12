function init(e){
    $('<div class="modal-backdrop custom_backdrop"><img src="http://kodekloud.s3.amazonaws.com/sites/554a79236e6f64713f000000/69e8cd982124dc73de1f5a67a627ee75/loading.gif" class="" alt=""></div>').appendTo(document.body);
    
    $(window).scroll(function(e){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
    //Click event to scroll to top
	$('.scrollToTop').click(function(e){
		$('html, body').animate({scrollTop : 0},800);
		e.preventDefault();
	});
	
	$('.accordion_header').click(function(e){
        $(this).find('i').toggleClass('fa-caret-down fa-caret-up');
	});
	
	//dynamically changing copyright year
var current_year = moment().year();
$("#current_year").text(current_year);
}

function show_content(){
    $('.yield').fadeIn();
    $(".modal-backdrop").remove();
    var windowWidth = $(window).width();
    if(windowWidth <= 1024) {
        $('.panel-collapse').removeClass('in')
    }
    var today_hours = getTodaysHours();
    renderHomeHours('#home_hours_container', '#home_hours_template', today_hours);
    var hours = getPropertyRegularHours();
    renderHomeDropdownHours('#hours_container', '#hours_template', hours, 'reg_hours');
}

function get_day(id){
    switch(id) {
        case 0:
            return ("Sunday");
            break;
        case 1:
            return ("Monday");
            break;
        case 2:
            return ("Tuesday");
            break;
        case 3:
            return ("Wednesday");
            break;
        case 4:
            return ("Thursday");
            break;
        case 5:
            return ("Friday");
            break;
        case 6:
            return ("Saturday");
            break;
    }
}

function get_month (id){
    var month = "";
    switch(id) {
        case 0:
            month = "Jan";
            break;
        case 1:
            month = "Feb";
            break;
        case 2:
            month = "Mar";
            break;
        case 3:
            month = "Apr";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "Jun";
            break;
        case 6:
            month = "Jul";
            break;
        case 7:
            month = "Aug";
            break;
        case 8:
            month = "Sep";
            break;
        case 9:
            month = "Oct";
            break;
        case 10:
            month = "Nov";
            break;
        case 11:
            month = "Dec";
            break;
    }
    return month;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function in_my_time_zone(hour, format){
    return hour.tz(getPropertyTimeZone()).format(format)
}
