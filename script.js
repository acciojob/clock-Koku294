let timerdisplay = document.getElementById("timer");
let currentDate = new date();
set Interval(
	function(){
		currentDate = new date();
		timerdisplay.innerHTML = currentDate.toLocaleString();
	
	},1000
)