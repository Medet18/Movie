 $(document).ready(function() {
    $('#autoWidth,#autoWidth2').lightSlider({
    	autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth,#autoWidth2').removeClass('cS-hidden');
        }
    });
});
$(document).ready(function(){
	$("#flip").click(function(){
	   $("#panel").slideToggle("slow");
	});
});
function show(){

}
function changeLog() {
   var a = document.getElementById('LoginC').value;
   document.getElementById('hooly').innerHTML = a;
}
function large(a){
  a.style.height = "45px";
}
function litle(a){
  a.style.height = "35px";
}
function load(a){
  $(".a").animate({opacity:'1'},"slow");
}
$('#logo').animate({left:"+=15px" ,opacity:'0'},'slow');
$('#logo').animate({left:"+=15px" ,opacity:'1'},'slow');

function changeLog(a){
  var b = a.innerHTML;
  var c = a.charAt(0);
  if(c == "L"){
    document.getElementById("loginC").innerHTML = "Log out";
  } 
  else{
    document.getElementById("loginC").innerHTML = "Log out Log in";
  }
}