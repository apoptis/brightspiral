// jQuery

function scaleDown() {

	$('.work > figure').removeClass('current').addClass('not-current');
	$('nav > ul > li').removeClass('current-li');

}

function show(category) {

	scaleDown();

	$('#' + category).addClass('current-li');
	$('.' + category).removeClass('not-current');
	$('.' + category).addClass('current');

	if (category == "all") {
		$('nav > ul > li').removeClass('current-li');
		$('#all').addClass('current-li');
		$('.work > figure').removeClass('current, not-current');
	}

}

$(document).ready(function(){

	$('#all').addClass('current-li');

	$("nav > ul > li").click(function(){
		show(this.id);
	});

});



// konami code

if (window.addEventListener) {
    // create the keys and konami variables
    var keys = [],
        konami = "38,38,40,40,37,39,37,39,66,65";
    
    // bind the keydown event to the Konami function
    window.addEventListener("keydown", function(e){
        // push the keycode to the 'keys' array
        keys.push(e.keyCode);
        
        // and check to see if the user has entered the Konami code
        if (keys.toString().indexOf(konami) >= 0) {
            // do something such as:
            // alert('Konami');
            var d = document.getElementById("ishtar");
			d.className = d.className + " ishtargrats";
            // and finally clean up the keys array
            keys = [];
        };
    }, true);
};
