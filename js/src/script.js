
var n = 0;
var m = 0;
var n_max = 4; // numero de elementos -1
var speed = 7000;

$( document ).ready(function() {

	//variable for the 'stroke-dashoffset' unit
  var $dashOffset = $(".path").css("stroke-dashoffset");
  //on a scroll event - execute function
  $(window).scroll(function() {
    //calculate how far down the page the user is
    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
    //convert dashoffset pixel value to interger
    var $newUnit = parseInt($dashOffset, 10);
    //get the value to be subtracted from the 'stroke-dashoffset'
    var $offsetUnit = $percentageComplete * ($newUnit / 100);
    //set the new value of the dashoffset to create the drawing effect
    $(".path").css("stroke-dashoffset", $newUnit - $offsetUnit);
  });


	$(".slide-image:eq("+n+")").show();
	$(".slide-text:eq("+n+")").show();
	$(".slide-select:eq("+n+")").addClass('active');
	slideShowInterval = setInterval(nextSlide, speed);
	$(".slide-select").click(function(){
		//console.log($(this).attr('index'));
		m=$(this).attr('index');
		clickSelect(n,m);
	});
});

function clickSelect(n,m){
	$(".slide-image:eq("+n+")").hide();
	$(".slide-text:eq("+n+")").hide(1000);
	$(".slide-select:eq("+n+")").removeClass('active');
	console.log("click"+m);
	$(".slide-image:eq("+m+")").fadeIn( "slow" );
	$(".slide-text:eq("+m+")").show(1000);
	$(".slide-select:eq("+m+")").addClass('active');
	this.n=m;
	clearInterval(slideShowInterval);
	slideShowInterval = setInterval(nextSlide, speed);
}

function nextSlide(){
	$(".slide-image:eq("+n+")").hide();
	$(".slide-text:eq("+n+")").hide(1000);
	$(".slide-select:eq("+n+")").removeClass('active');
	console.log("auto "+n);
	n++;
	if(n == n_max){
		n = 0;
	}
	$(".slide-image:eq("+n+")").fadeIn( "slow" );
	$(".slide-text:eq("+n+")").show(1000);
	$(".slide-select:eq("+n+")").addClass('active');
}


