$(".login").hide();
$(".register-op").addClass("active");
$(".login-op").click(function () {
	// body...
	$(this).addClass("active");
	$(".register-op").removeClass("active");
	$(".login").show().slideUp(0).slideDown(2000);
	$(".register").hide();
})

$(".register-op").click(function(){
	$(this).addClass("active");
	$(".login-op").removeClass("active");
	$(".register").show().slideUp(0).slideDown(2000);
	$(".login").hide();
})
function check () {
	var password = document.getElementById("tpassword").value;
	var confirmpass = document.getElementById("ctpassword").value;
	if (password  == confirmpass) {
		alert("Congrutulations you are ready to go");
		document.location.reload(true);
	}
	else{
		alert("Password & AgainPassword does not match. Try Again!!!");
	}
}
function LOG(){
	var a = document.forms.myform.reset();
	var password = document.getElementById("tpassword").value;
	var confirmpass = document.getElementById("ctpassword").value;
	var thirdpassword = document.getElementById("thpassword").value;
	if((password == thirdpassword) && (confirmpass == thirdpassword)){
		alert("Welcome you join to account");
			window.open('','_parent','');
			window.close();
	}
	else{
		alert("Run window again!!!");
	}
}