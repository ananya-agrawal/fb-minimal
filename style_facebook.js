let a = 1;
let f=1;

var userData = [];
setInterval(function() {
  updateBackgroundSettings();
}, 1000);


window.onresize = function() {
  autoWidth();
};
autoWidth();
function autoWidth() {
  if (userData[0] == "automatic") {
    $("#chromeFacebookbackground").css("background-size", document.width);
  }
}
function updateBackgroundSettings() {
  if ($("body").hasClass("UIPage_LoggedOut")) return;
  chrome.extension.sendMessage({ method: "get_vars" }, function(response) {
    userData = response.variables.split("~~~");

// Focus Mode

    chrome.storage.local.get(/* String or Array */ ["onoffswitch"], function(
      items
    ) {
      if (items.onoffswitch === "true") {
        
		$("._5pcb._dp7._4j3f").css("display", "none");
		


		  // $('<iframe width="100%" height="100%" frameborder="0" src="https://landbot.io/u/H-28975-NKVXCWXE3G716Q3G/index.html"></iframe>')
		  // .appendTo('.clearfix');
      }
      else if (items.onoffswitch === "false") {
        // console.log("it worked");
        $("._5pcb._dp7._4j3f").css("display", "inline");
        $('._2s25').css('color','white');
      }
	});
	

	// status-icon  Light Mode


    chrome.storage.local.get(/* String or Array */ ["statusicon"], function(
		items
	  ) {
		if (items.statusicon === "true") {
		  

			$('._2t-a._26aw._5rmj._50ti._2s1y').css("background-color", 'white');
	
			$('._2s25').css('color','black');
			$('._2md').css('background-image','url("https://image.ibb.co/jxjMA7/icon48.png")');
			$('._2md').css('background-position',"0 0");
      $('._2md').css('background-size','24px 24px');
      

      $('._2t-a._26aw._5rmj._50ti._2s1y').css("background-color", 'white');
			$('.titlebarTextWrapper').css('color','black');	
      $('._15p4._2pis').css('color','black');
      
      if(a===1){
      $(function () {
          // $('<p>Text</p>').appendTo('.clearfix');
          // let elems = document.getElementsByClassName('clearfix')
          // console.log(elems)
          // let target = elems[1]
          // target.innerHTML = '<p>Wow magic</p>'
          // $('#bottomContent').text('some random quote here')
          $('#bottomContent').html("<img src='http://weknowmemes.com/wp-content/uploads/2012/04/facebook-is-like-jail.jpg' />")
          a=2;
        });
      }

      
		//   $("._5pcb._dp7._4j3f").css("display", "none");
		}
		else if (items.statusicon === "false") {
		  // console.log("it worked");
		//   $("._5pcb._dp7._4j3f").css("display", "inline");

		$('._2t-a._26aw._5rmj._50ti._2s1y').css("background-color", 'blue');


		}
	  });

    if (userData[2] != " ") {


		$('#pagelet_navigation').css('display','none');
		$('#leftCol').css('display','none');
		$('._4-u2._1-ib._2tyk._20os._4-u8').css('display','none');
		$('.lpfm').css('display','none');
		$('#pagelet_rhc_footer').css('display','none');
		$('._1qkq._1qks').css('display','none');
					$('.clearfix').css('background-color','white');
		//$('.clearfix').css('opacity','0.7');
					//$('a.clearfix').css('background-color','white');
					//$('divdiv.clearfix').css('background-color','white');
					//$('divdivdiv.clearfix').css('background-color','white');
		$('._1-ia').css('display','none');
		//$('#rightCol').css('background-color','black !important');
		//$('._2t-a._26aw._5rmj._50ti._2s1y').css("opacity", '0.7');
			//$('#chromeFacebookbackground').css("background-color", 'black');
			//$('#chromeFacebookbackground').css("opacity", '0.7');
			$('#pagelet_ego_pane').css('display','none');


      //background set
      if (!$("#chromeFacebookbackground").length) {
        $("body").prepend('<div id="chromeFacebookbackground"></div>');
      }
      $("#pagelet_navigation").css("visibility", "hidden");
      $("#leftCol").css("visibility", "hidden");
      var currentBackground = JSON.parse(userData[2]);
      $("#chromeFacebookbackground").css("background-color", "white");
      autoWidth();
    } else {
      $("#chromeFacebookbackground").remove();
    }
    if (!$("#background_changer_link").length) {
      $("#pageNav .firstItem").after(
        '<li id="background_changer_link"  class="navItem"><a href="' +
          chrome.extension.getURL("options.html") +
          '" target="_blank" class="navLink">Customize</a></li>'
      );
    }
    $(".fbTimelineTimePeriod").css("background", "none");
    $(
      "#leftCol, .UIStandardFrame_Container, .fbTimelineUFI, .timelineUnitContainer, div#contentCol.homeFixedLayout, .ego_column"
    ).css("background-color", "rgba(255,255,255," + userData[1] + ")");
    $(".fbTimelineCapsule .timelineUnitContainer, #pageFooter").css(
      "background-color",
      "rgba(255,255,255," + userData[1] + ")"
    );
    //footer
    $("#pageFooter").css({
      "border-radius": "5px",
      height: "30px"
    });
    $("#navSearch .uiTypeahead").css("border", "none");
    $("#navSearch .uiSearchInput").css("border-top", "none");
    $("#pageNav .tinyman .headerTinymanPhoto").css({
      border: "none",
      "border-top": "none"
    });
    $(
      "#pageNav .navItem a.navLink, .fbJewel a.jewelButton, #pageLogo a,#navAccountLink"
    ).hover(function() {
      $(this).css("background-color", "transparent");
    });
    $("#pageNav .navItem a").addClass("targetAfter"); //adds class so css can target the psuedo element separator
  });
}
updateBackgroundSettings();
// DarkMode();
// function DarkMode(){

// }