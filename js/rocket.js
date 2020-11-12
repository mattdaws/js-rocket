var timer = null;

function changeState(state) {
	// body...
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	var countdownNumber = 10
	document.getElementById('countdown').innerHTML = countdownNumber;

	if (state == 2) {
		timer = setInterval(function () {
			document.getElementById('countdown').innerHTML = countdownNumber;
			countdownNumber -= 1;
			if (countdownNumber <= 0) {
				changeState(3);
			}
		}, 500);
	}	else if (state == 3){
			var success = setTimeout(function(){
				var randomNumber = Math.round(Math.random()*10);
				if (randomNumber > 5){
					// do something
					changeState(4);
				} else{
					// do something else
					changeState(5); // oh no!
				}
			}, 2000);		
		}
}
