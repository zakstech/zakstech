$(document).ready( function(){

	var active = false;

$(".box").hover(
	

	function(){
	var box = this
	if($(box).hasClass("hover")){
		$("h2",box ).css({"font-size":"24px"})
	$("p",box ).css({"font-size":"14px"})
		$(box).css({"margin":"5%","height": "104%","width":"104%","box-shadow": "20px 20px 15px #777777"})
		

	}
},

	function(){
		var box = this
		
		if($(box).hasClass("hover")){
		$(box).css({"margin":"10%","height": "90%","width":"90%","box-shadow": "10px 10px 5px #888888"})
		$("h2",box ).css({"font-size":"20px"})
	$("p",box ).css({"font-size":"12px"})
	}
}



)

$(".box").click(function(){
	var box = this
	

	
	if($(box).css("z-index")==="1"&&active===false){
		
		$(box).find(".close").css({"visibility":"visible"})
		active=true
			$(".box").removeClass("hover")
	
	var top ="-120px"
	var top2 = "-220px"
	var left = "5%"
	var left2 = "-80%"
	var width= "300%"
	if($(box).hasClass("top")){
		top="160px"
		top2="14px"
	}
	if($(box).hasClass("left")){
		left="111%"
		left2="2%"
	} else if($(box).hasClass("right")){ 
		left="-100%"
		left2="-208%"

	} else if ($(box).hasClass("bottom")){
		width = "265%"}

		$(".box").css({"transition": "all .8s"});
		$(box).css({"z-index": "2","margin-top":top, "margin-left":left, "height":"104%", "width": "104%"

		})

		
		setTimeout(
			function(){

				$(".box").css({"transition": "all 1s linear .5s"});
						$("h2",box ).css({"font-size":"62px","transition":"all 1s linear .5s" })
						$("p",box ).css({"font-size":"40px","transition":"all 1s linear .5s"})

				$(box).css({"width": width,"height":width, "z-index": "2","margin":"2%","margin-top":top2,"margin-left":left2, "box-shadow": "50px 50px 25px","border-width":"15px"});
		
			},1200)
				
		}
	


	/*$(this).css({"grid-column-start": "1","grid-column-end": "4","grid-row-start":"1","grid-row-end":"3", "width": "100%","height":"100%", "margin":"2%"});
	*/

})


$(".close").click(function(){
	var box = this.closest(".box")
	$(box).find(".close").css({"visibility":"hidden"})

	var top ="-120px"
	var left = "0%"
	if($(box).hasClass("top")){
		top="80px"
	}
	if($(box).hasClass("left")){
		left="111%"
	} else if($(box).hasClass("right")){ 
		left="-105%"}

	$(box).css({"width": "100%","height":"100%", "z-index": "2","margin-top":top, "margin-left":left, "box-shadow": "15px 15px 10px","border-width":"5px"})
	$("h2",box ).css({"font-size":"20px"})
	$("p",box ).css({"font-size":"12px"})

	setTimeout(
		function(){

			
			$(box).css({"z-index": "2","margin":"10%", "height":"90%", "width": "90%", "box-shadow":"10px 10px 5px #888888"	})

		},1500)
	setTimeout(
		function(){
			
			$(".box").css({"transition": "all .4s linear .2s"});
			$("h2",box ).css({"font-size":"20px","transition": "all .4s linear .2s"})
	$("p",box ).css({"font-size":"12px","transition": "all .4s linear .2s"})
			//$(".box").addClass("hover");
			$(".box").addClass("hover");
			active=false;

		},2500)
	setTimeout(
		function(){
			$(box).css({"z-index": "1"	})
				$(box).attr("href", "#")
		},3000)


})

	
})

/*

$("#box2").click(function(){
	
	

	
	if($("#box2").css("z-index")==="1"){
		$(".box").css({"transition": "all 1s"});
		$("#box2").css({"z-index": "2","margin-top":"50%",  "height":"100%", "width": "100%"

		})
		
		setTimeout(
			function(){

				$(".box").css({"transition": "all 1s linear .5s"});

				$("#box2").css({"width": "310%","height":"210%", "z-index": "2","margin":"2%", "box-shadow": "50px 50px 25px","border-width":"15px"});},1200)
		}
	



})

$("#box3").click(function(){
	
	

	
	if($("#box3").css("z-index")==="1"){
		$(".box").css({"transition": "all 1s"});
		$("#box3").css({"z-index": "2","margin-top":"50%", "margin-left":"-108%", "height":"100%", "width": "100%"

		})
		
		setTimeout(
			function(){

				$(".box").css({"transition": "all 1s linear .5s"});

				$("#box3").css({"width": "310%","height":"210%", "z-index": "2","margin":"2%", "margin-left":"-208%", "box-shadow": "50px 50px 25px","border-width":"15px"});},1200)
		}
	



})


$("#box4").click(function(){
	
	

	
	if($("#box4").css("z-index")==="1"){
		$(".box").css({"transition": "all 1s"});
		$("#box4").css({"z-index": "2","margin-top":"-50%", "margin-left":"111%", "height":"100%", "width": "100%"

		})
		
		setTimeout(
			function(){

				$(".box").css({"transition": "all 1s linear .5s"});

				$("#box4").css({"width": "310%","height":"210%", "z-index": "2","margin":"2%","margin-top":"-90%", "box-shadow": "50px 50px 25px","border-width":"15px"});},1200)
		}
	



})

$("#box5").click(function(){
	
	

	
	if($("#box5").css("z-index")==="1"){
		$(".box").css({"transition": "all 1s"});
		$("#box5").css({"z-index": "2","margin-top":"-50%", "height":"100%", "width": "100%"

		})
		
		setTimeout(
			function(){

				$(".box").css({"transition": "all 1s linear .5s"});

				$("#box5").css({"width": "310%","height":"210%", "z-index": "2","margin":"2%","margin-top":"-90%", "margin-left":"-100%", "box-shadow": "50px 50px 25px","border-width":"15px"});},1200)
		}
	



})


$("#box6").click(function(){
	
	

	
	if($("#box6").css("z-index")==="1"){
		$(".box").css({"transition": "all 1s"});
		$("#box6").css({"z-index": "2","margin-top":"-50%", "margin-left":"-111%", "height":"100%", "width": "100%"

		})
		
		setTimeout(
			function(){

				$(".box").css({"transition": "all 1s linear .5s"});

				$("#box6").css({"width": "310%","height":"210%", "z-index": "2","margin":"2%","margin-top":"-85%", "margin-left":"-208%", "box-shadow": "50px 50px 25px","border-width":"15px"});},1200)
		}
	


	

})

*/