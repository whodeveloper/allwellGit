Set the first and last li to a variable
var $first = $("li:first", "ul"),
var $last =  $("li:last","ul");

var $first = $('li:first', 'ul'),
    $last = $('li:last', 'ul');

$("#next").click(function () {
 
    var $next,
        $selected = $(".selected");
    // get the selected item
    // If next li is empty , get the first
    $next = $selected.next('li').length ? $selected.next('li') : $first;
    $selected.removeClass("selected").fadeOut('fast');
    $next.addClass('selected').fadeIn('fast');
});

$("#prev").click(function () {
    var $prev,
        $selected = $(".selected");
    // get the selected item
    // If prev li is empty , get the last
    $prev = $selected.prev('li').length ? $selected.prev('li') : $last;
    $selected.removeClass("selected").fadeOut('fast');
    $prev.addClass('selected').fadeIn('fast');
});

// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }


















































// $('body').flowtype({
	
// });