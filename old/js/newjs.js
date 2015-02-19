
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
