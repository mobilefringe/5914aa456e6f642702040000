function init(e){
    $('<div class="modal-backdrop custom_backdrop"><img src="//kodekloud.s3.amazonaws.com/sites/554a79236e6f64713f000000/69e8cd982124dc73de1f5a67a627ee75/loading.gif" class="" alt=""></div>').appendTo(document.body);
    
    $('.menu_toggler').click(function(){
        $('#navbar').slideToggle();
        if ($('.menu_toggler').attr('src') == '//codecloud.cdn.speedyrails.net/sites/562a661e6e6f64426b000000/image/png/1445970905000/menu.png'){
            $('.menu_toggler').attr('src', '//codecloud.cdn.speedyrails.net/sites/57f66e416e6f6465fe050000/image/png/1452534608000/menu_close.png');
        }else{
            $('.menu_toggler').attr('src', '//codecloud.cdn.speedyrails.net/sites/562a661e6e6f64426b000000/image/png/1445970905000/menu.png');
        }
    })
    
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
	
    get_instagram("//dixieoutlet.mallmaverick.com/api/v2/dixieoutlet/social.json", 9, 'thumbnail', render_instagram)
    
    blog_searcher();
    
    $('#subForm').submit(function(e){
        e.preventDefault();
        if($("#agree_newsletter").is(':checked')){
            $.getJSON(
                this.action + "?callback=?",
                $(this).serialize(),
                function (data) {
                    if (data.Status === 400) {
                        alert("An error occured while processing your request. Please try again later.");
                    } else { // 200
                        $("#subscription_confirmed").fadeIn();
                        $('#subscription_confirmed').delay(2000).fadeOut();
                        $('#subForm').trigger('reset');
                    }
            });
        }
        else{
            $("#agree_newsletter").focus();
            alert("Please agree to receive newsletter before continuing.")
        }
    });
}
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