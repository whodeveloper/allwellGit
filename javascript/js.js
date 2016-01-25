Set the first and last li to a variable

var $first = $("li:first", "ul"),
    $last = $("li:last", "ul");

$("#next").click(function () {
 
    var $next,
        $selected = $(".selected");
    // get the selected item
    // If next li is empty , get the first
    $next = $selected.next("li").length ? $selected.next("li") : $first;
    $selected.removeClass("selected").fadeOut("fast");
    $next.addClass("selected").fadeIn("fast");
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






  // $(function(){
  //     $("#slides").slidesjs({
  //       width: 500,
  //       height: 400,

  //     });
  //   });


// $(function(){
//   $("#slides").slidesjs({
//     navigation: {
//       active: true,
//         // [boolean] Generates next and previous buttons.
//         // You can set to false and use your own buttons.
//         // User defined buttons must have the following:
//         // previous button: class="slidesjs-previous slidesjs-navigation"
//         // next button: class="slidesjs-next slidesjs-navigation"
//       effect: "fadeIn"
//         // [string] Can be either "slide" or "fade".
//     }
//   });
// });



// Below Code is to check to see whether jQuery got load 
// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }



// window.onload = function(){
// 	if (window.jQuery){
// 		alert ("Hell Yeah !!!!! jQuery Rocks !");
// 	}else{
// 		alert ("Oh No, something is wrong ! Check your src,filepath ,did you include CDN ?");
// 	}
// }














































// $('body').flowtype({
	
// });