import $ from "jquery";
// /[\d\w!@#$%^&*~?]+/g

// @media(max - width: 768px) {
// 	.footer-links-wrapper ul {
// 		display: none;
// 	}
// 	.footer-links-wrapper h3 {
// 		padding: 10px 0;
// 		border-bottom: 1px solid #ccc;
// 	}
// 	.footer-links-wrapper h3:after {
// 		font-family: "FontAwesome";
// 		content: "\f067"; foo
// 		padding-left: 10px;
// 		position: absolute;
// 		right: 25px;
// 	}
// }
// Code sample
// // Set the background color to yellow, when the mouse pointer is over a <p> element
// $("p").mouseover(function(){
//   $("p").css("background-color", "yellow");
// });
// $(window).on("resize", function (event) {
//   if ($(window).width() <= 768) {
//     $(".footer-links-wrapper").addClass("someClass");
//   } else {
//     $(".footer-links-wrapper").removeClass("someClass");
//     $(".footer-links-wrapper ul").show();
//   }
// });
if ($(window).width() <= 768) {
  $(".footer-links-wrapper").addClass("MobileClass");
} else {
  $(".footer-links-wrapper").removeClass("MobileClass");
}
$(window).on("resize", function (event) {
  if ($(window).width() <= 768) {
    $(".footer-links-wrapper").addClass("MobileClass");
  } else {
    $(".footer-links-wrapper").removeClass("MobileClass");
    $(".footer-links-wrapper ul").show();
  }
});
// Footer collapse functionality
$(document).on("click", ".MobileClass h3", function () {
  $(this).next("ul").slideToggle();
  $(this).toggleClass("Zee");
});

// $(document).ready(function () {
//   $(".footer-links-wrapper h3 ").click(function () {
//     if ($(window).width() < 768) {
//       $(this).next("ul").slideToggle(1000);
//       // $(this).find($("	.footer-links-wrapper h3:after")).removeClass("	.footer-links-wrapper h3:after").addClass(" .footer-links-wrapper .Zee h3:after");
//     } else {
//       $(".footer-links-wrapper ul").show();

//     }

//   });
// });

// jQuery(".footer-links-wrapper h3").click(function () {
//  jQuery(this).toggleClass("Zee");

// });

// if ($(window).width() < 768) {
//     $(this).next("ul").slideToggle(1000);
//     // $(this).find($("	.footer-links-wrapper h3:after")).removeClass("	.footer-links-wrapper h3:after").addClass(" .footer-links-wrapper .Zee h3:after");
//   }

$(document).ready(function () {
  $(".footer-links-wrapper h3 ").click(function () {
    if ($(window).width() > 768) {
      $(this).next("ul");
      // $(this).find($("	.footer-links-wrapper h3:after")).removeClass("	.footer-links-wrapper h3:after").addClass(" .footer-links-wrapper .Zee h3:after");
    }
  });
});
// //*change h3 name

//  $("button").mouseover(function () {
//    if ($(window).width() < 768) {
//      $(".navbar-collapse ul").css("background-color", "black");
//    }
//  });

$("h3:first").mouseenter(function () {
  if ($(window).width() > 768) {
    $(this).html("Zee-apple-website");
  }
});

$("h3:first").mouseout(function () {
  if ($(window).width() > 768) {
    $(this).html("Shop and Learn");
  }
});

// $("h3").click(function () {
//   if ($(window).width() > 768) {
//     $(this).text("Zee-apple-website");
//   }
//   $(this).text(
//     $(this).text() == "Order by Alphabet"
//       ? "Order by Category"
//       : "Order by Alphabet"
//   );

// });
// $("h3").mouseout(function () {
//   if ($(window).width() > 768) {
//     $(this).html("h3");
//   }
// });

//***/ change background colour of h3 using mouseenter and mouseout on the mobile size
$("h3").mouseenter(function () {
  if ($(window).width() < 768) {
    $("h3").css("background-color", "yellow");
  }
});

$("h3").mouseout(function () {
  if ($(window).width() < 768) {
    $("h3").css("background-color", "");
  }
});
//***/ change background colour of li using mouseenter and mouseout
$("[href]").mouseenter(function () {
  if ($(window).width() < 768) {
    $("[href]").css("background-color", " #2997ff");
  }
});

$("[href]").mouseout(function () {
  if ($(window).width() < 768) {
    $("[href]").css("background-color", "");
  }
});
//***/ change background colour of h3 using mouseenter and mouseout

$("h3").mouseenter(function () {
  if ($(window).width() > 768) {
    $("h3").css("background-color", "gray");
  }
});

$("h3").mouseout(function () {
  if ($(window).width() > 768) {
    $("h3").css("background-color", "");
  }
});
// //*change background colur of ul using mouseover

$("button").mouseover(function () {
  if ($(window).width() < 768) {
    $(".navbar-collapse ").css("background-color", "black");
  }
});

// let agzEl = $("h3:first-child")
// agzEl.on(click, function () {
//   agzEl.text("Zee-Appel");
// });
// agzEl.text("Zee-Appel")
// console.log(agzEl)

// let agzEl = $(".footer-links-wrapper h3:after");
// agzEl.on(click, changeSign)

// function changeSign() {
//   	font-family: "FontAwesome";
//     agzEl.content = "f00d";

// };

// let a=agzEl.text("Zee-Appel");
// console.log(a);
//    $(document).ready(function () {
//      $("button").click(function () {
//        $("p").toggle(1000);
//      });
//    });

// $(function() {
//   $(".links-wrapper-1 h3").click(function () {
//     $(this).parent().toggleClass("active");
//   });
// });

// $(document).ready(function () {
//   $("#mobile").click(function () {
//     $("#fripple").slideToggle();
//     $("#site-navigation").slideToggle();
//     $("#secondary").slideToggle();

//     if ($(window).width() < 850) {
//       $("#fripple").slideUp();
//       $("#site-navigation").slideUp();
//       $("#secondary").slideUp();
//     }
//   });
// });

// For changing the icon you can easily do something like this in your click event:

// $(this).find($(".fa")).removeClass('fa-chevron-down').addClass('fa-chevron-up');
//  jQuery(document).ready(function(){
//       $('ul.tab-menu li').click(e){
//           $('ul.tab-menu li').removeClass('active');
//           $(this).addClass('active');
//       }
//   });

// $(document).ready(function () {
//   $(".links-wrapper-2 h3").click(function () {
//     $(".b").slideToggle(1000);
//   });
// });

// $(document).ready(function () {
//   $(".links-wrapper-2 h3").click(function () {
//     $(".c").slideToggle(1000);
//   });
// });

// $(document).ready(function () {
//   $(".links-wrapper-3 h3").click(function () {
//     $(".d").slideToggle(1000);
//   });
// });
// $(document).ready(function () {
//   $(".links-wrapper-4 h3").click(function () {
//     $(".e").slideToggle(1000);
//   });
// });
// $(document).ready(function () {
//   $(".links-wrapper-4 h3").click(function () {
//     $(".f").slideToggle(1000);
//   });
// });
// $(document).ready(function () {
//   $(".links-wrapper-4 h3").click(function () {
//     $(".g").slideToggle(1000);
//   });
// });
// $(document).ready(function () {
//   $(".links-wrapper-4 h3").click(function () {
//     $(".h").slideToggle(1000);
//   });
// });
// $(document).ready(function () {
//   $(".links-wrapper-5 h3").click(function () {
//     $(".i").slideToggle(1000);
//   });
// });
// $(document).ready(function () {
//   $(".links-wrapper-5 h3").click(function () {
//     $(".j").slideToggle(1000);
//   });
// });

// // function changeBackground() {
// //   let ch = $(".navbar-collapse collapse");

// //  ch.body.style.background-color: black;
// // }
// // let el = $(".navbar-toggler navbar-toggler-right");
// // // el.onclick = changeBackground;
// <li><a href="#">multicrop thresher <span class="icon icon2"></span></a></li>

//    <h3>Shop and Learn <span class="icon icon2"></span></h3>

// jQuery('.gallery li a').click(function() {
// let element = jQuery('h3 span.icon');
// if(element.hasClass('icon2')){
// element.removeClass('icon2');
// }
// else{
// element.addClass('icon2');
// }
// });

//  .footer - links - wrapper.icon2: after

// .icon:after {
// content: "\f068"; /* this is your text. You can also use UTF-8 character codes as I do here */
// font-family: FontAwesome;
// /*float:right;*/
// padding-left:5px;

// }

// .icon2:after {
// content: "\f067"; /* this is your text. You can also use UTF-8 character codes as I do here */
// font-family: FontAwesome;
// /*float:right;*/
// padding-left:5px;

// }
// .gallery li, .gallery ul {
// list-style-type: none;
// margin-left: 0px;
// /*margin-top: 50px;*/
// padding: 0;
// width: 20%;
// background: rgba(128, 128, 255, 0.5);
// }
// .gallery ul li {
// width: 100%;
// }
// .gallery li a {
// display: block;
// color: #000;
// padding: 10px 20px;
// text-decoration: none;
// text-transform: uppercase;
// font-size: 1em;
// font-family: 'Bree Serif', serif;

// }
// .gallery li a:hover {
// background-color: #8080ff;
// color: white;
// }
